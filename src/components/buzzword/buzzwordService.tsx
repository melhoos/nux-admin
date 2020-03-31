import {useState, useEffect} from 'react';
import Buzzword from '../../interfaces/buzzword';
import { Service } from '../../services/dataService';
import { apiUrl } from '../../constants/urls';

const BuzzwordService = () => {
    const [buzzwords, setBuzzwords] = useState<Service<Buzzword[]>>({
        status: 'loading'
    })

    useEffect(() => {
        fetch(`${apiUrl}/buzzwords`)
            .then(response => response.json())
            .then(response => setBuzzwords({status: 'loaded', payload: response}))
            .catch(error => setBuzzwords({status: "error", error}))
    }, [])

    return buzzwords
}

export default BuzzwordService

export async function postData(title: String, description: String) {
    const res = await fetch(`${apiUrl}/buzzword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Title: title,
            Description: description
        })
    })
    res
        .json()
        .then(response => ({status: 'loaded', payload: response}) )
        .catch(error => ({status: "error", error}))
    return res
}

export async function putData(bw: Buzzword) {
    const res = await fetch(`${apiUrl}/buzzword/${bw.Id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Title: bw.Title,
            Description: bw.Description
        })
    })
    res
        .json()
        .then(response => ({status: 'loaded', payload: response}) )
        .catch(error => ({status: "error", error}))
    return res
}

export async function deleteData(id: number) {
    const res = await fetch(`${apiUrl}/buzzword/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    res
        .json()
        .then(response => ({status: 'loaded', payload: response}) )
        .catch(error => ({status: "error", error}))
    return res
}