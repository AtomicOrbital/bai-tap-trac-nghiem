import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment >
      <header>
        <nav className="nav bg-white border-bottom fixed-top d-flex align-items-stretch">
          <div className="border-right">
            <a className="btn bg-white my-0 py-3 px-4" href="https://toeicez.com/learn/tu-hoc-toeic">
              <i className="fas fa-times mr-2" /> Đóng
            </a>
          </div>
          <div className="d-flex align-items-center pl-3 pr-5 font-weight-bold text-info">
            Tự học ToeicEZ: Part 2
          </div>
          {/* <div className="d-flex align-items-center mx-auto">
          <div tabIndex={0} className="plyr plyr--full-ui plyr--audio plyr--html5 plyr--paused"><div className="plyr__controls"><button className="plyr__controls__item plyr__control" type="button" data-plyr="restart"><svg aria-hidden="true" focusable="false"><use xlinkHref="#plyr-restart" /></svg><span className="plyr__sr-only">Restart</span></button><button className="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlinkHref="#plyr-pause" /></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlinkHref="#plyr-play" /></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input data-plyr="seek" type="range" min={0} max={100} step="0.01" defaultValue={0} autoComplete="off" role="slider" aria-label="Seek" aria-valuemin={0} aria-valuemax="19.8075" aria-valuenow="1.482203" id="plyr-seek-6622" aria-valuetext="00:01 of 00:19" style={{- value: '7.48%'}} /><progress className="plyr__progress__buffer" min={0} max={100} value={100} role="progressbar" aria-hidden="true">% buffered</progress><span className="plyr__tooltip">00:00</span></div></div><div className="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">00:01</div><div className="plyr__controls__item plyr__time--duration plyr__time" aria-label="Duration">00:19</div><div className="plyr__controls__item plyr__volume"><button type="button" className="plyr__control" data-plyr="mute"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlinkHref="#plyr-muted" /></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlinkHref="#plyr-volume" /></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min={0} max={1} step="0.05" defaultValue={1} autoComplete="off" role="slider" aria-label="Volume" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100} id="plyr-volume-6622" aria-valuetext="100.0%" style={{- value: '100%'}} /></div><div className="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-6622" aria-expanded="false" type="button" className="plyr__control" data-plyr="settings"><svg aria-hidden="true" focusable="false"><use xlinkHref="#plyr-settings" /></svg><span className="plyr__sr-only">Settings</span></button><div className="plyr__menu__container" id="plyr-settings-6622" hidden><div><div id="plyr-settings-6622-home"><div role="menu"><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden><span>Captions<span className="plyr__menu__value">Disabled</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden><span>Quality<span className="plyr__menu__value">undefined</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Speed<span className="plyr__menu__value">Normal</span></span></button></div></div><div id="plyr-settings-6622-captions" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Captions</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu" /></div><div id="plyr-settings-6622-quality" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Quality</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu" /></div><div id="plyr-settings-6622-speed" hidden><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Speed</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.8"><span>0.8×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.9"><span>0.9×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value={1}><span>Normal</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.1"><span>1.1×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.2"><span>1.2×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.3"><span>1.3×</span></button></div></div></div></div></div></div><audio autoPlay playsInline __idm_id__={2932737}><source src="https://toeicez.com/medias/toeicfull/ets_toeic_2019_test_9/20.mp3" type="audio/mp3" /><source src="https://toeicez.com/medias/toeicfull/ets_toeic_2019_test_9/20.mp3" type="audio/ogg" /></audio><button type="button" className="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlinkHref="#plyr-play" /></svg><span className="plyr__sr-only">Play</span></button></div>
        </div> */}
          <div className="d-flex align-items-center ml-auto border-left">
            <div className="text-center mx-4" id="timer">
              <p className="m-0">Thời gian còn lại</p>
              {/* <p className="m-0 font-weight-bold text-info" id="countDown">00:24:48</p> */}
            </div>
          </div>
        </nav>
      </header>
      <section className="container">
        <div id="questionsContainer" style={{marginTop: '50px'}}>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 1: Đề văn được Đen tiết lộ trong MV mới là gì?
            </p>
            <div>
              <input defaultValue={2} className="answer-1" type="radio" name="answer-1" />
              <label className="lead">Người lái đò sông Đà</label>
            </div>
            <div>
              <input defaultValue={3} className="answer-1" type="radio" name="answer-1" />
              <label className="lead">Người lái thuyền Sông Hương</label>
            </div>
            <div>
              <input defaultValue={4} className="answer-1" type="radio" name="answer-1" />
              <label className="lead">Người vận chuyển</label>
            </div>
            <div>
              <input defaultValue={5} className="answer-1" type="radio" name="answer-1" />
              <label className="lead">Đất Nước</label>
            </div>
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 2: Vị tướng nào sau đây là biểu tượng quốc dân của game Liên minh huyền thoại
            </p>
            <div>
              <input defaultValue={3} className="answer-2" type="radio" name="answer-2" />
              <label className="lead">Vayne</label>
            </div>
            <div>
              <input defaultValue={5} className="answer-2" type="radio" name="answer-2" />
              <label className="lead">Yasuo</label>
            </div>
            <div>
              <input defaultValue={7} className="answer-2" type="radio" name="answer-2" />
              <label className="lead">Aphelios</label>
            </div>
            <div>
              <input defaultValue={9} className="answer-2" type="radio" name="answer-2" />
              <label className="lead">Ryze</label>
            </div>
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 3: Câu thành ngữ nào sau đây là đúng?
            </p>
            <div>
              <input defaultValue={4} className="answer-3" type="radio" name="answer-3" />
              <label className="lead">Ăn cơm trước kẽng</label>
            </div>
            <div>
              <input defaultValue={7} className="answer-3" type="radio" name="answer-3" />
              <label className="lead">Ăn keng trước cỡm</label>
            </div>
            <div>
              <input defaultValue={10} className="answer-3" type="radio" name="answer-3" />
              <label className="lead">Ăn kem trước cổng</label>
            </div>
            <div>
              <input defaultValue={13} className="answer-3" type="radio" name="answer-3" />
              <label className="lead">Tất cả đều sai</label>
            </div>
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 4: Thần chú mở cửa trong Alibaba và 40 tên cướp là gì?
            </p>
            <div>
              <input defaultValue={5} className="answer-4" type="radio" name="answer-4" />
              <label className="lead">Cửa ơi mở hộ</label>
            </div>
            <div>
              <input defaultValue={9} className="answer-4" type="radio" name="answer-4" />
              <label className="lead">Open the door</label>
            </div>
            <div>
              <input defaultValue={13} className="answer-4" type="radio" name="answer-4" />
              <label className="lead">Ai ở nhà hôn?</label>
            </div>
            <div>
              <input defaultValue={17} className="answer-4" type="radio" name="answer-4" />
              <label className="lead">Vừng ơi mở ra</label>
            </div>
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 5: MV ca nhạc mà Đen vào vai thám tử Sherlock Home?
            </p>
            <input id="answer-5" type="text" className="form-control w-50" />
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 6: Ca khúc mới nhứt của Sếp là gì?
            </p>
            <input id="answer-6" type="text" className="form-control w-50" />
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 7: Có ba quả táo trên bàn và bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?
            </p>
            <input id="answer-7" type="text" className="form-control w-50" />
          </div>
          <div>
            <p className="lead font-italic" style={{ fontSize: 30 }}>
              Câu 8: Từ gì mà 100% nguời dân Việt Nam đều phát âm sai?
            </p>
            <input id="answer-8" type="text" className="form-control w-50" />
          </div>
        </div>
        <button className="btn btn-light" id="btnSubmit" onclick="submit()">Submit</button>
      </section>


    </Fragment>
  )
}
