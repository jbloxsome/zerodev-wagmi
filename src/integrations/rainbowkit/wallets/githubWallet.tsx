import { Chain } from "wagmi";
import { AbstractWeb3AuthWalletConnectorOptions } from "../../../connectors/AbstractWeb3AuthWalletConnector.js";
import { GithubSocialWalletConnector } from "../../../connectors/GithubSocialWalletConnector.js";
import { Wallet } from "./wallet.js";

export function githubWallet({chains, options}: {chains?: Chain[], options: AbstractWeb3AuthWalletConnectorOptions}): Wallet{
    return {
        iconBackground: '#fff',
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/142_Github_logo_logos-512.png',
        id: 'openlogin_github',
        name: 'Github',
        createConnector: function (){
            return {connector: new GithubSocialWalletConnector({chains, options})}
        }
    }
}