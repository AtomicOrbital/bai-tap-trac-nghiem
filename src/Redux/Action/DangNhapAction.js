import { history } from '../../App';
import { BaiTapTracNghiemService } from '../Services/BaiTapTracNghiemService';



export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await BaiTapTracNghiemService.signIn(thongTinDangNhap);
            console.log(result.data.token);
            if(result.status == 200 ) {
                dispatch({
                    type:'DANG_NHAP_ACTION',
                    thongTinDangNhap: result.data.token
                });
            }
            localStorage.setItem('token', result.data.token);
            history.push('/profile')
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
}






































































