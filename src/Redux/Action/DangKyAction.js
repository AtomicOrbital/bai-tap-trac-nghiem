import React from 'react'
import { history } from '../../App';
import { BaiTapTracNghiemService } from '../Services/BaiTapTracNghiemService';

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await BaiTapTracNghiemService.signUp(thongTinDangKy);
            // console.log(result);
            if(result.status === 200 ) {
                history.push('./home');
            }
        } catch (error) {
            console.log(error);
        }
    };
}
