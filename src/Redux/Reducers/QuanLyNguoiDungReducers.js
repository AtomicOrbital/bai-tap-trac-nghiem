

// let user = {};
// if(localStorage.getItem('token')) {
//     user = JSON.parse(localStorage.getItem('token'));
// }

const stateDefault = {
    // userLogin: user,

    thongTinNguoiDung :{}


}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'DANG_NHAP_ACTION' : {
            console.log("action.thongTinDangNhap.token", action.thongTinDangNhap.token);
            localStorage.setItem('token', JSON.stringify(action.thongTinDangNhap.token));
            // localStorage.setItem('token',action.thongTinDangNhap.token);
            return {...state};
        }
     
        default:
            return {...state}
    }
}