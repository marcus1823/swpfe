import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="mid-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 ft-info">
              <h4 className="title-menu">Bean Furniture</h4>

              <div className="des_foo">
                Với sứ mệnh "Khách hàng là ưu tiên số 1" chúng tôi luôn mang lại giá trị tốt nhất
              </div>

              <div className="list-menu toggle-mn">
                <div className="content-contact clearfix">
                  <span className="list_footer">
                    <b>Địa chỉ: </b>
                    Khu CNC, Đại học FPT, Quận 9, TP.HCM
                  </span>
                </div>
                <div className="content-contact clearfix">
                  <span className="list_footer">
                    <b>Điện thoại: </b>
                    <a title="1900 6750" href="tel:19006750">
                      0123456789
                    </a>
                  </span>
                </div>
                <div className="content-contact clearfix">
                  <span className="list_footer">
                    <b>Email: </b>
                    <a title="support@sapo.vn" href="mailto:support@sapo.vn">
                      phatnttse173202@fpt.edu.vn
                    </a>
                  </span>
                </div>
              </div>
              <div className="social-footer">
                <div className="social toggle-mn">
                  <a className="fb" href="">
                    <i className="ti-facebook"></i>
                  </a>
                  <a className="tt" href="">
                    <i className="ti-twitter"></i>
                  </a>
                  <a className="yt" href="">
                    <i className="ti-youtube"></i>
                  </a>
                  <a className="ins" href="">
                    <i className="ti-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 ft-menu">
              <div className="row">
                <div className="col-12 col-sm-6 link-list col-footer footer-click">
                  <h4 className="title-menu title-menu2">Chính sách</h4>
                  <ul className="list-menu hidden-mobile">
                    <li>
                      <a href="#" title="Chính sách thành viên">
                        Chính sách thành viên
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chính sách thanh toán">
                        Chính sách thanh toán
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chính sách đổi sản phẩm">
                        Chính sách đổi sản phẩm
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chính sách bảo mật">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chính sách cộng tác viên">
                        Chính sách cộng tác viên
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 link-list col-footer footer-click">
                  <h4 className="title-menu title-menu2">Hướng dẫn</h4>
                  <ul className="list-menu hidden-mobile">
                    <li>
                      <a href="#" title="Hướng dẫn mua hàng">
                        Hướng dẫn mua hàng
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Hướng dẫn đổi trả">
                        Hướng dẫn đổi trả
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Hướng dẫn thanh toán">
                        Hướng dẫn thanh toán
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Chương trình cộng tác viên">
                        Chương trình cộng tác viên
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Giải đáp thắc mắc">
                        Giải đáp thắc mắc
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <h4 className="title-menu">Đăng ký nhận tin</h4>
              <span className="content-mailchimp">Đăng ký ngay! Để nhận thật nhiều ưu đãi</span>
              <form id="mc-form" className="newsletter-form">
                <input type="email" className="form-control" name="" placeholder="Nhập địa chỉ email" required="" />
                <button className="btn btn-default" type="submit">
                  ĐĂNG KÝ
                </button>
              </form>

              <h4 className="title-menu">Hình thức thanh toán</h4>
              <ul className="thanhtoan">
                <li>
                  <img width="108" height="66" alt="Payment 1" className="lazyload loaded" src="//bizweb.dktcdn.net/100/494/385/themes/919262/assets/payment_1.png?1703641115968" />
                </li>
                <li>
                  <img width="108" height="66" alt="Payment 2" className="lazyload loaded" src="//bizweb.dktcdn.net/100/494/385/themes/919262/assets/payment_2.png?1703641115968" />
                </li>
                <li>
                  <img width="108" height="66" alt="Payment 3" className="lazyload loaded" src="//bizweb.dktcdn.net/100/494/385/themes/919262/assets/payment_4.png?1703641115968" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <span className="copy-right">© Trang web của phatntt <b>FurnitureProject</b></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
