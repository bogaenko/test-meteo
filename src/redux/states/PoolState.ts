export interface IPoolStateUpdate {
  id: string;
  dateRunStarted?: string | null;
  dateRunFinished?: string | null;
}

export interface IPoolState extends IPoolStateUpdate {
  name: string;
  count: number;
  isParallel: boolean;
  dateCreated?: string;
  isStartManually: boolean;    
}