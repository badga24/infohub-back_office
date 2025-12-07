import { Controller, useFieldArray, useForm } from 'react-hook-form';
import type { ICreateEvent } from '../../../interfaces/ICreateEvent';
import { createEvent } from '../../../service/event.service';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';
import { buildIFile } from '../../../utils/utils';
import { uploadFile } from '../../../service/file.service';

export interface IEventViewProps {
}

export function EventView({ }: IEventViewProps) {
    const navigate = useNavigate();
    const { register, handleSubmit, control } = useForm<ICreateEvent & { coverFile: File }>({})
    const { fields: topics, append: addTopic, remove: deleteTopic } = useFieldArray({ control, name: "topics" })
    const { fields: categories, append: addCategory, remove: deleteCategory } = useFieldArray({ control, name: "categories" })
    const onSubmit = async (data: ICreateEvent & { coverFile: File }) => {
        try {
            if (data.coverFile) {
                const fileData = buildIFile(data.coverFile);
                data.cover = fileData;
            }
            const res = await createEvent(data);
            if (data.coverFile && res.data.cover) {
                await uploadFile(res.data.cover, data.coverFile);
            }
            navigate(routes.home.getPath());
        } catch (err) {
            console.error("Erreur lors de la création de l'événement :", err);
        }
    }

    const TopicInput = ({ index, control, register }: { index: number, control: any, register: any }) => {
        const { fields: speakers, append: addSpeaker, remove: deleteSpeaker } = useFieldArray({ control, name: `topics.${index}.speakers` as const })
        return (
            <div>
                <input {...register(`topics.${index}.name` as const, { required: true })} placeholder="Nom du topic" />
                <button type="button" onClick={() => deleteTopic(index)}>Supprimer le topic</button>
                {speakers.map((speaker, speakerIndex) => (
                    <div key={speaker.id}>
                        <input {...register(`topics.${index}.speakers.${speakerIndex}.firstName` as const, { required: true })} placeholder="Prénom du speaker" />
                        <input {...register(`topics.${index}.speakers.${speakerIndex}.lastName` as const, { required: true })} placeholder="Nom du speaker" />
                        <button type="button" onClick={() => deleteSpeaker(speakerIndex)}>Supprimer le speaker</button>
                    </div>
                ))}
                <button type="button" onClick={() => addSpeaker({ firstName: '', lastName: '' })}>Ajouter un speaker</button>
            </div>
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="coverFile">Choisissez un fichier :</label>
                <Controller
                    name="coverFile"
                    control={control}
                    render={({ field }) => (
                        <input
                            type="file"
                            onChange={(e) => field.onChange(
                                e.target.files ? e.target.files[0] : null
                            )}
                        />)}
                />
                <input type="text" {...register('name')} placeholder="Nom de l'événement" />
                <input type="text" {...register('location.address')} />
                {topics.map((field, index) => <TopicInput key={field.id} index={index} control={control} register={register} />)}
                <button type="button" onClick={() => addTopic({ name: '', speakers: [] })}>Ajouter un topic</button>
                {categories.map((field, index) => (
                    <div key={field.id}>
                        <input {...register(`categories.${index}.name` as const, { required: true })} placeholder="Nom de la catégorie" />
                        <button type="button" onClick={() => deleteCategory(index)}>Supprimer la catégorie</button>
                    </div>
                ))}
                <button type="button" onClick={() => addCategory({ name: '' })}>Ajouter une catégorie</button>
                <button type="submit">Créer l'événement</button>
            </form>
        </>
    );
}
