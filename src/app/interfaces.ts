export interface Corso {
    id: number
    titolo: string
    durata: number
    costo: number
    docente: string
    data_partenza: string
    n_partecipanti?: number
}

export interface Contatto {
    nome: string
    email: string
    telefono: number
    messaggio: string
}

export interface Message {
    msg: string
}