import React, {Component} from 'react';
import logo from './dbs-logo.png';
import HomeScreenButton from './HomeScreenButton';
import './App.css';
import icon_account_summary from './icons/account_summary.png';
import icon_transfer from './icons/transfer.png';
import icon_pay_cards from './icons/pay_cards.png';
import icon_pay_bills from './icons/pay_bills.png';
import icon_paylah from './icons/paylah.png';
import icon_dbs_invest from './icons/dbs_invest.png';
import icon_redeem_reward from './icons/redeem_reward.png';
import icon_search from './magnifying-glass.png'
import Popup from "reactjs-popup";
import FloatGroup from 'react-float-button';

class App extends Component {

    handleWhatCanIDo() {

    }

    handleAccountSummary() {

    }

    render() {
        return (
            <div
                className="App"
                style={{
                    padding: 18,
                }}
            >
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div
                        style={{
                            borderRadius: 24,
                            backgroundColor: "#ffaaaa",
                            margin: 18,
                            flexDirection: 'row'
                        }}
                    >
                        <input
                            placeholder={"What would you like to do today?"}
                            style={{
                                fontSize: 24,
                                margin: 5,
                                borderColor: '#ffffff',
                                flexDirection: 'row',
                                minWidth: 640,
                                height: 32,
                                padding: 6,
                                border: 0,
                                backgroundColor: '#00000000'
                            }}
                        />
                        <img
                            src={icon_search}
                            style={{
                                maxWidth: 20,
                                maxHeight: 20,
                                paddingRight: 20
                            }}
                        />
                    </div>
                </div>

                <p
                    style={{
                        fontSize: 24,
                    }}
                >
                    What can I do?
                </p>

                <div
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: 32,
                        }}
                    >
                        Quick Links
                    </p>

                    <div
                        className='row'
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Popup
                            trigger={
                                <HomeScreenButton
                                    text={'Account Summary'}
                                    src={icon_account_summary}
                                />
                            }
                            position="right top"
                        >
                            <img src={icon_account_summary}/>
                        </Popup>

                        <HomeScreenButton
                            text={'Transfer to My DBS/POSB'}
                            src={icon_transfer}
                        />
                        <HomeScreenButton
                            text={'Transfer to Other DBS/POSB'}
                            src={icon_transfer}
                        />
                        <HomeScreenButton
                            text={'Pay Credit Card'}
                            src={icon_pay_cards}
                        />
                        <HomeScreenButton
                            text={'Pay Bills'}
                            src={icon_pay_bills}
                        />
                    </div>

                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: 32,
                        }}
                    >
                        Suggestions
                    </p>

                    <div
                        className='row'
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <HomeScreenButton
                            text={'Topup PayLah!'}
                            src={icon_paylah}
                        />
                        <HomeScreenButton
                            text={'DBS Vicker\'s Online Trading'}
                            src={icon_dbs_invest}
                        />
                        <HomeScreenButton
                            text={'Redeem Reward'}
                            src={icon_redeem_reward}
                        />
                        <HomeScreenButton
                            text={'Transfer Money to Mum'}
                            src={icon_transfer}
                        />
                        <HomeScreenButton
                            text={'Transfer Money to John Chan'}
                            src={icon_transfer}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
