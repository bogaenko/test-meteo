export interface IPoolState {
  id: string;
  name: string;
  count: number;
  isParallel: boolean;
  dateCreated?: string;
  isStartManually: boolean;
  dateRunStarted?: string | null;
  dateRunFinished?: string | null;  
}