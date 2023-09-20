import { Chain } from "wagmi";
import { AbstractWeb3AuthWalletConnectorOptions } from "../../../connectors/AbstractWeb3AuthWalletConnector.js";
import { FacebookSocialWalletConnector } from "../../../connectors/FacebookSocialWalletConnector.js";
import { Wallet } from "./wallet.js";

export function facebookWallet({chains, options}: {chains?: Chain[], options: AbstractWeb3AuthWalletConnectorOptions}): Wallet{
    return {
        iconBackground: '#fff',
        iconUrl:
            'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook-512.png',
        id: 'openlogin_facebook',
        name: 'Facebook',
        createConnector: function (){
            return {connector: new FacebookSocialWalletConnector({chains, options})}
        }
    }
}