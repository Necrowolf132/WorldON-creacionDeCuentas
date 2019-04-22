import { Injectable } from '@angular/core';
import {AccountHttp, NEMLibrary, NetworkTypes, Address, Account} from 'nem-library';
import nem from 'nem-sdk';
@Injectable({
  providedIn: 'root'
})
export class BlockchainXemService {
    DireccionNueva: Address;
    Nem: object = nem;

    constructor() {
        NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
    }

    public InicioCrearclaves(): object {
        const rBytes = this.Nem['crypto']['nacl'].randomBytes(32);
        const rHex = this.Nem['utils']['convert'].ua2hex(rBytes);
        const keyPair = this.Nem['crypto']['keyPair'].create(rHex);
        const CLavePrivada = this.Nem['utils']['convert'].ua2hex(keyPair['secretKey']);
        const ClavePublica = keyPair['publicKey'].toString();
        return {ClavePrivada: CLavePrivada, ClavePublica: ClavePublica};
    }

    public generarDireccion(keyPublic: string): string {
        const Direccion = this.Nem['model']['address'].toAddress(keyPublic, this. Nem['model']['network']['data']['testnet']['id']  );
        return Direccion;
    }
    public ObtenerCuentaAddress(AddressString: string) {
        this.DireccionNueva = new Address(AddressString);
        const accountHttp = new AccountHttp();
        accountHttp.getFromAddress(this.DireccionNueva).subscribe(accountInfoWithMetaData => {
            console.log(accountInfoWithMetaData);
        });
    }
}
