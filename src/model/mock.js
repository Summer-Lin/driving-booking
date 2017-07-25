import Mock from 'mockjs';

var trainBooingSubject = Mock.mock('http://trainBooing-subject', {
    isShow: 'none',
    examitem:'选择科目',
    test:[
        { item:"科目一"},
        { item:"科目二"},
        { item:"科目三"},
        { item:"科目四"},
        { item:"科目五"},
        { item:"科目六"},
    ],
    title:"训练科目"
});


export default trainBooingSubject
