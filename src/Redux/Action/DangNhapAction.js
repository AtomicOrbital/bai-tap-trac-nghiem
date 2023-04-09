import { history } from '../../App';
import { BaiTapTracNghiemService } from '../Services/BaiTapTracNghiemService';



export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await BaiTapTracNghiemService.signIn(thongTinDangNhap);
            console.log(result);
            if(result.status == 200 ) {
                dispatch({
                    type:'DANG_NHAP_ACTION',
                    thongTinDangNhap: result.data.token
                });
            }
            history.push('/home')
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
}






































































