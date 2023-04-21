export interface task {
    id: number;
    titulo: string; 
    descricao: string;
    data: Date;
    prioridade: string ;
}

export interface tasks {
    task: []
}

export interface prioridades {
    value: string;
}
