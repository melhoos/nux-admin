import Buzzword from '../../interfaces/buzzword';
import {Service, ConnectionStatus} from '../../utility/service';
import {apiUrl} from '../../utility/urls';

const buzzwordBody = (bw: Buzzword) => {
    return {
        Title: bw.Title,
        Description: bw.Description
    }
}

export async function getBuzzwords(): Promise<Service<Buzzword[]>> {
    return await fetch(`${apiUrl}/buzzwords`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Buzzword[]) => {
            const result: Service<Buzzword[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Buzzword[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function postBuzzword(bw: Buzzword): Promise<Service<Buzzword[]>> {
    return await fetch(`${apiUrl}/buzzword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buzzwordBody(bw))
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Buzzword[]) => {
            const result: Service<Buzzword[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Buzzword[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function putBuzzword(bw: Buzzword): Promise<Service<Buzzword[]>> {
    return await fetch(`${apiUrl}/buzzword/${bw.Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(buzzwordBody(bw))
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Buzzword[]) => {
            const result: Service<Buzzword[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Buzzword[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function deleteBuzzword(id: number): Promise<Service<Buzzword[]>> {
    return await fetch(`${apiUrl}/buzzword/${id}`, {
            method: 'DELETE'
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Buzzword[]) => {
            const result: Service<Buzzword[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Buzzword[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}