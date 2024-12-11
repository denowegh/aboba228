export interface TrainingPlan {
    /** Unique identifier for the training plan */
    id: number;

    /** Name of the training plan */
    name: string;

    /** Description of the training plan */
    description: string;

    /** Type of training plan */
    type: string;

    /** Duration of the training plan in days */
    duration: number;

    /** Price of the training plan */
    price: number;
}