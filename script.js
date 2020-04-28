$("#submit").click(()=> {

    const information = {
        name: undefined,
        grade: undefined,
        course: undefined,
        time: undefined,
        phone: undefined
    }

    information.name = $("#name").val();
    information.grade = $("#grade").val();
    information.course = $("#course").val();
    information.time = $("#time").val();
    information.phone = $("#phone").val();

    if (isEmpty(information)) {
        alert("在线报名：请填写所有信息 ！")
    } else {
        alert("提交成功 感谢您的报名 我们的客服会很快和您联系 ！")
    }

    function isEmpty(obj) {
        for (let i in obj) {
            if (obj[i] === "") {
                return true;
            }
        }
        return false;
    }

})