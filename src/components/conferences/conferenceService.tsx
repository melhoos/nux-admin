import Conference from '../../interfaces/conference';
import {Service, ConnectionStatus} from '../../utility/service';
import {apiUrl} from '../../utility/urls';

const conferenceBody = (c: Conference) => {
    return {
        Name: c.Name,
        Description: c.Name,
        City: c.City,
        Country: c.Country,
        StartDate: c.StartDate,
        EndDate: c.EndDate,
        URL: c.URL
    }
}

export async function getConferences(): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conferences`)
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const reps = response ? response : [];
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: reps}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function postConference(c: Conference): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conference`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(conferenceBody(c))
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function putConference(c: Conference): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conference/${c.Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(conferenceBody(c))
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}

export async function deleteConference(id: number): Promise<Service<Conference[]>> {
    return await fetch(`${apiUrl}/conference/${id}`, {
            method: 'DELETE'
        })
        .then((response: Response) => {
            if (response.ok) return response.json()
            else throw new Error(`Error: ${response.statusText}`)
        })
        .then((response: Conference[]) => {
            const result: Service<Conference[]> = {status: ConnectionStatus.SUCCESS, payload: response}
            return result
        })
        .catch((error: Error) => {
            const errorResult: Service<Conference[]> = {status: ConnectionStatus.ERROR, error}
            return errorResult
        })
}