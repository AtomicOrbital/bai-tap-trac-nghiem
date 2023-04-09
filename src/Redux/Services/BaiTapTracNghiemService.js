import axios from 'axios';


export const BaiTapTracNghiemService = {

    signIn: (thongTinDangNhap) => {
        // console.log("abc");
        return axios({
            url: 'https://1bf0-113-160-14-17.ap.ngrok.io/api/auth/login',
            method: 'POST',
            data: thongTinDangNhap,
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
    },
    signUp: (thongTinDangKy) => {
        return axios({
            url: 'https://1bf0-113-160-14-17.ap.ngrok.io/api/auth/signup',
            method: 'POST',
            data: thongTinDangKy
        })
    }
};
