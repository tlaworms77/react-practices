import React, { Fragment } from 'react';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword: '',
            contents: 'Hello React',
            birthYear: '1985'
        }
    }

    onInputChange(event) {
        // this.setState({
        //     keyword: event.target.value
        // });

        // 5자 제한을 걸고 싶으면...
        this.setState({
            keyword: event.target.value.substr(0, 5),
        });
    }

    onTextAreaChange(event) {
        this.setState({
            contents: event.target.value
        });
    }

    onSelectChange(event) {
        this.setState({
            birthYear: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    검색: <input type='text' value={ this.state.keyword } onChange={ this.onInputChange.bind(this)} />
                </div>
                <br/>
                <div>
                    내용: <textarea value={ this.state.contents } onChange={ this.onTextAreaChange.bind(this)} />
                </div>
                <div>
                    생년:
                    <select value={ this.state.birthYear } onChange={ this.onSelectChange.bind(this)}>
                        <option value='1984'>1984년</option>
                        <option value='1985'>1985년</option>
                        <option value='1986'>1986년</option>
                    </select>
                </div>
            </Fragment>
        )
    }
}