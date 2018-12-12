export interface ITask {
id?: string;
    userId: string;
    task: string;
    isChecked: boolean;
    isOverdue: boolean;
}
export interface ITaskUpload extends ITask {
    timestamp: Date;
}

export interface ITaskDownload extends ITask {
    timestamp: {
        nanoseconds: number;
        seconds: number;
        toDate();
    };
}
