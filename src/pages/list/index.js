import { Table ,Modal, Button, Form, Input} from 'antd';
import { connect } from 'dva';
import React, {Component} from 'react';

const FormItem = Form.Item;

function mapStateToProps(state) {
    console.log("得到数据");
    console.log(state);
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
        statistic: state.cards.statistic,
    };
}

 class List extends Component{
    state = {
        visible: false,
        statisticVisible: false,
        id: null,
    };
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
    showModal = () => {
        this.setState({ visible: true });
        console.log("show");
    };
    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;

        validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                });
                this.setState({ visible: false });
            }
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const { visible, statisticVisible, id } = this.state;
        const { cardsList, cardsLoading, form: { getFieldDecorator }, statistic } = this.props;
        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
                <Button onClick={this.showModal}>新建</Button>
                <Modal
                    title="新建记录"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem label="名称">
                            {getFieldDecorator('name', {
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="描述">
                            {getFieldDecorator('desc')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="链接">
                            {getFieldDecorator('url', {
                                rules: [{ type: 'url' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Form.create()(List));