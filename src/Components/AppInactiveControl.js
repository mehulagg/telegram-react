import React from 'react';
import Button from '@material-ui/core/Button/Button';
import {withStyles} from '@material-ui/core';
import './AppInactiveControl.css';

const styles = {
    button: {
        margin: '20px',
    }
};

class AppInactiveControl extends React.Component {

    constructor(props) {
        super(props);
    }

    static handleReload(){
        window.location.reload();
    }

    render() {

        return (
            <div className='app-inactive'>
                <div className='app-inactive-wrapper'>
                    <a className='app-inactive-image' onClick={AppInactiveControl.handleReload}>

                    </a>
                    <h3 className='app-inactive-title'>Such error, many tabs</h3>
                    <div className='app-inactive-description'>
                        Telegram supports only one active tab with the app.
                        <br/>
                        Please reload this page to continue using this tab or close it.
                    </div>
                    <div className='app-inactive-actions'>
                        <Button color='primary' className={this.props.classes.button} onClick={AppInactiveControl.handleReload}>
                            Reload app
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AppInactiveControl);