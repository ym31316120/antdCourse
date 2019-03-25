import { Table } from 'antd';
import { connect } from 'dva';
import React, {Component} from 'react';

function mapStateToProps(state) {
    console.log("得到数据");
    console.log(state);
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
    };
}
@connect(mapStateToProps)
export default class List extends Component{
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '描述',
            dataIndex: 'desc',
        },
        {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value}>{value}</a>,
        },
    ];
    constructor(props) {
        super(props);
        this.counter = 100;
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }
    render() {
        const { cardsList, cardsLoading } = this.props;
        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
            </div>
        );
    }
}