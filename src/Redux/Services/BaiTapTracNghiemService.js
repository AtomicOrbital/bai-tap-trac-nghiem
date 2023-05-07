import axios from 'axios';


export const BaiTapTracNghiemService = {

    signIn: (thongTinDangNhap) => {
        // console.log("abc");
        return axios({
            url: 'http://localhost:8080/api/auth/login',
            method: 'POST',
            data: thongTinDangNhap,
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
    },
    signUp: (thongTinDangKy) => {
        return axios({
            url: 'http://localhost:8080/api/auth/signup',
            method: 'POST',
            data: thongTinDangKy
        })
    }
};
