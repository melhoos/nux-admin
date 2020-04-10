import {ConnectionStatus, Service} from './service';

function reloadOnSuccess (resp: Service<any>) {
    if (resp.status === ConnectionStatus.SUCCESS) {
        window.location.reload();
    } 
} 

export {reloadOnSuccess}