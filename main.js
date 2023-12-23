const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const clickRegister = $('.js-click-register');
const clickLogin = $('.js-click-login');
const showRegister = $('.js-show-register');
const hideLogin = $('.js-modal-login');
const registerBtn = $('.js-register-btn');
const loginBtn = $('.js-login-btn');
const textLogin = $('.js-login-text');
const textRegister = $('.js-register-text');
const showUser = $('.js-infor-user')
const hideUser = $('.js-hide-form-login');
const showUser1 = $('.js-infor-user-1')
const hideUser2 = $('.js-hide-form-login-1');
const logoutBtn = $('.js-logout-btn');
const headerInput = $('.js-header-input');
const modalLogin = $('.modal__login');
const register = $('.register');
const registerContainer = $('.register__container');
const loginContainer = $('.login__container');
const jsColRight = $('.js-col-right');
const slideLeftBtn = $('.slider-nav-arrow .fa-angle-left');
const slideRightBtn = $('.slider-nav-arrow .fa-angle-right');
const lowPricetoHighPrice = $('.cost-low-to-hight');
const hightPricetoLowPrice = $('.cost-hight-to-low');
const headerSearch = $('.header-search-modal');
const headerSearchContainer = $('.header-search-container');
const headerSearchInput = $('.header-search');
const headerSearchBtn = $('.js-header-nav-search');
const homeBtncostText = $('.home-button__cost-text');
const productInCart = $('.product-in-cart');
const headerUser = $('.header-user');
const productPortfolioContainer = $(".product-portfolio-container");
const menuProduct = $('.js-menu-product');
const btnSearch = $('.js-header-nav-search');
const prevPageBtn = $('.pagination-link-prev');
const nextPageBtn = $('.pagination-link-next');
const slidesImg = $$('.slide');
const slideBtns = $$('.slider-btn');
const listHeaderNav = $$('.header-nav-left .header-nav');
var dataUserAccount = [];
var currentSlide = 0;
var totalSlides = $$('.slider img').length;
var isMenuActive = false;
var totalProduct = 0;
var isHovered = false;
var isActiveSearch = false;
//Header search
function activeBtnSearch() {
  addActiveHeaderNav(0);
  isActiveSearch = true;
}
function showHeaderSearch() {
  headerSearchContainer.style.display = 'flex';
}
function hideHeaderSearch() {
  headerSearchContainer.style.display = 'none';
  addActiveHeaderNav(1);
  isActiveSearch = false;
}
headerSearchInput.addEventListener('click', function (e) {
  e.stopPropagation();
});
btnSearch.addEventListener('click', activeBtnSearch)
headerSearchBtn.addEventListener('click', showHeaderSearch)
headerSearch.addEventListener('click', hideHeaderSearch);

//Menu products
function showMenuProduct() {
  if (menuProduct.classList.contains('display')) {
    menuProduct.classList.remove('display');
    productPortfolioContainer.style.display = 'none';
    listHeaderNav[2].classList.remove('active');
    isMenuActive = false;
    isHovered = false;
  } else {
    menuProduct.classList.add('display');
    productPortfolioContainer.style.display = 'flex';
    addActiveHeaderNav(2);
    isMenuActive = true;
    isHovered = true;
  }
}
function showProductInCart() {
  productInCart.style.display = 'flex';
}
menuProduct.addEventListener('click', showMenuProduct);
function updateMarginTop(value) {
  productPortfolioContainer.style.marginTop = value;
}
window.addEventListener("scroll", function () {
  var header = $(".header");
  var logo = $(".header-logo");

  if (window.scrollY > 0) {
    header.style.height = "80px";
    logo.style.width = "60px";
    updateMarginTop('-20px');
  } else {
    header.style.height = "100px";
    logo.style.width = "80px";
    updateMarginTop('0');
  }
});
function addActiveHeaderNav(index) {
  for (var i = 0; i < listHeaderNav.length; i++) {
    listHeaderNav[i].classList.remove('active');
  }
  listHeaderNav[index].classList.add('active');
}
for (var i = 0; i < listHeaderNav.length; i++) {
  listHeaderNav[i].addEventListener('mouseenter', createMouseEnterHandler(i));

  if (!isMenuActive) {
    listHeaderNav[i].addEventListener('mouseleave', createMouseLeaveHandler(i));
  }
}

function createMouseEnterHandler(index) {
  return function () {
    isHovered = true;
    addActiveHeaderNav(index);
  };
}

function createMouseLeaveHandler() {
  return function () {
    isHovered = false;
    if (!isMenuActive && !isActiveSearch) {
      addActiveHeaderNav(1);
    } else if (isActiveSearch) {
      addActiveHeaderNav(0);
    } else if (isMenuActive) {
      addActiveHeaderNav(2);
    }
  };
}
// document.addEventListener('click', (event) => {
//   const productPortfolioContainer = document.getElementById('productPortfolioContainer');
  
//   // Check if the clicked element is outside the container
//   if (!productPortfolioContainer.contains(event.target)) {
//     // Hide the container
//     productPortfolioContainer.style.display = 'none';
//   }
// });
//Slider
function removeCureentSlide() {
  slideBtns[currentSlide].classList.remove('active');
  slidesImg[currentSlide].style.display = 'none';
}
function updateCurrentSlideBack() {
  currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
}
function updateCurrentSlide() {
  currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
}
function updateSlide() {
  slideBtns[currentSlide].classList.add('active');
  slidesImg[currentSlide].style.display = 'flex';
}
function nextSlide() {
  slideBtns[currentSlide].classList.add('active');
  slidesImg[currentSlide].style.display = 'flex';
}
function startAutoSlide() {
  setInterval(function () {
    removeCureentSlide();
    updateCurrentSlide();
    nextSlide();
  }, 3000);
}
slideLeftBtn.addEventListener('click', function () {
  removeCureentSlide();
  updateCurrentSlideBack();
  nextSlide();
})
slideRightBtn.addEventListener('click', function () {
  removeCureentSlide();
  updateCurrentSlide();
  nextSlide();
})
slideBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function (event) {
    removeCureentSlide();
    currentSlide = index;
    updateSlide();
    event.preventDefault();
  });
});
startAutoSlide();

//Render products
var products = [
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-leo54lptspf65c_tn',
    name: 'Giày Thể Thao Air Jordan 1 Chicago Lost And Found Đỏ Trắng Phù Hợp Vơi Cả Nam Và Nữ',
    oldPrice: '1.200.000đ',
    newPrice: '900.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lodklcct2xo3af',
    name: 'Giày Thể Thao Air Jordan 1 Low Panda Đen Trắng Cho Cả Nam Và Nữ',
    oldPrice: '1.100.000đ',
    newPrice: '550.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk7j2jocr92s74',
    name: 'Giày Thể Thao Air Jordan 4 Military Black Trắng Xám Phù hợp cả Nam và Nữ',
    oldPrice: '1.100.000đ',
    newPrice: '618.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li5rphss07bg64',
    name: 'Giày Thể Thao Air Jordan 1 x Spider Man "Across the Spider Verse" Đỏ Trắng Cao Cổ',
    oldPrice: '1.200.000đ',
    newPrice: '759.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-0uj944jbdriv12',
    name: 'Giày thể thao Air Jordan 4 Off-White Sail Màu Vàng Nhạt',
    oldPrice: '1.200.000đ',
    newPrice: '650.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhd69x8atvxv25',
    name: 'Giày Thể Thao Travis Scott x Air Jordan 1 Low "Olive" Màu Trắng Kem Đen',
    oldPrice: '1.000.000đ',
    newPrice: '599.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln84fhfo3hv7e8',
    name: 'Giày Thể Thao Air Jordan 1 Low Light Smoke Grey Xám Trắng Cổ Thấp Cực Phong Cách',
    oldPrice: '1.200.000đ',
    newPrice: '900.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lggdd6kniewnfb',
    name: 'Giày Thể Thao Air Jordan 1 Low Light Smoke Grey Shadow Toe Đen Trắng Gót Xám',
    oldPrice: '1.100.000đ',
    newPrice: '499.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-yhgg9edsybnv27',
    name: 'Giày Thể Thao Air Jordan 1 Obsidian Unc Xanh Than Gót Xanh Dương Cổ Cao',
    oldPrice: '1.200.000đ',
    newPrice: '234.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/sg-11134201-23020-t5viweq1q9mva5',
    name: 'Giày Thể Thao Air Jordan 1 Low Travis Scott Fragment Cổ Thấp Màu Xanh đen',
    oldPrice: '1.400.000đ',
    newPrice: '559.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgm3fhqerpki75',
    name: 'Giày Thể Thao Jordan 1 Paris Cổ Thấp Màu Xám Xanh Cực Phong Cách',
    oldPrice: '1.000.000đ',
    newPrice: '522.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/5eba46112b9e6061141c76941ba1d487',
    name: 'Giày Thể Thao Sneaker AIR JORDAN 1 Low Red White Trắng Mũi đen Gót đỏ Cổ Thấp',
    oldPrice: '1.200.000đ',
    newPrice: '900.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhygvz4xxd399c_tn',
    name: 'Giày Air Jordan 1 Low Triple White Trắng Cổ Thấp',
    oldPrice: '1.100.000đ',
    newPrice: '665.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/111f78aae67a1f2a364394a0c893270f',
    name: 'Giày Thể Thao Sneakers YZ 350 V2 Zebra Ngựa Vằn Cực đẹp Cho Cả Nam Và Nữ',
    oldPrice: '900.000đ',
    newPrice: '513.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/69ff0011bd71cbdf9e3de3921f1393f4',
    name: 'Giày Thể Thao Sneaker Nam Nữ SUPERSTAR Sò Tem Vàng Trắng Vạch đen',
    oldPrice: '650.000đ',
    newPrice: '428.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/050b1ecaf72ba838a4e86bc1f02bc4c2',
    name: 'Giày Thể Thao Sneakers AIR JORDAN 1 High Shadow 2.0 Xám đen Da Lộn',
    oldPrice: '590.000đ',
    newPrice: '230.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/d1899e994bc6e11de199d9fa9836413a',
    name: 'Giày Thể Thao MLB Big Ball Chunky Boston Trắng Chữ Boston đỏ',
    oldPrice: '399.000đ',
    newPrice: '199.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln84fhfo4wfna2',
    name: 'Giày Air Jordan 1 High UNC Xanh Trắng Cổ Cao Cực Đẹp Cho Cả Nam Và Nữ',
    oldPrice: '499.000đ',
    newPrice: '250.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/9bbef680209f409b22db727992312e27',
    name: 'Giày thể thao LV Trainer Green Monogram Denim White Xanh Trắng Cực Phong Cách cho cả nam và nữ',
    oldPrice: '1.400.000đ',
    newPrice: '700.000đ',
  },
  {
    backgroundImage: 'https://down-vn.img.susercontent.com/file/sg-11134201-22120-yg5m6bm7rjlv00',
    name: 'Giày Sneaker Alphabounce Beyond 2018 "White" Trắng',
    oldPrice: '950.000đ',
    newPrice: '570.000đ',
  },
]
function render(products) {
  const htmls = products.map((product) => {
    return `<div class="grid__col-left-2 item">
                      <div class="home-product-item">
                          <div class="home-product-item__img" style="background-image: url(${product.backgroundImage});"></div>
                          <h4 class="home-product-item__name">${product.name}</h4>
                          <div class="home-product-item___price">
                              <span class="home-product-item__price-old">${product.oldPrice}</span>
                              <span class="home-product-item__price-new">${product.newPrice}</span>
                          </div>
                          <div class="home-product-item__action">
                              <span class="home-product-item__like home-product-item__like--liked">
                                  <i class="home-product-item__no-like-icon fa-regular fa-heart"></i>
                                  <i class="home-product-item__liked-icon fa-solid fa-heart"></i>
                              </span>
                              <div class="home-product-item__rating-star">
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                                  <i class="fa-solid fa-star"></i>
                              </div>
                              <span class="home-product-item__sold">1.000 Đã bán</span>
                          </div>
                          <div class="home-product-item__origin">
                              <span class="home-product-item__brand">Duy Mall</span>
                              <span class="home-product-item__country">Việt Nam</span>
                          </div>
                          <div class="home-product-item__favourite">
                              <i class="fa-solid fa-check"></i>
                              <span>Yêu thích</span>  
                          </div>
                          <div class="home-product-item__sale-off">
                              <span class="home-product-item__percent">10%</span>
                              <span class="home-product-item__lable">GIẢM</span>
                          </div>
                      </div>
                  </div>`
  })
  jsColRight.innerHTML = htmls.join('');
}
render(products);

//Login modal - logout modal
var checkDataRegister = false;
function showFormLogin() {
  showRegister.style.display = 'flex';
  hideLogin.style.display = 'none'
}
clickRegister.addEventListener('click', showFormLogin);
function showFormRegister() {
  var accountInput = document.querySelector('.js-data-register-account').value;
  var passInput = document.querySelector('.js-data-register-password').value;
  var newAccount = {
    account: accountInput,
    password: passInput,
  }
  dataUserAccount.push(newAccount);
  showRegister.style.display = 'none';
  hideLogin.style.display = 'flex';
}
clickLogin.addEventListener('click', async function (event) {
  event.preventDefault();
  showFormRegister();
});
registerBtn.addEventListener('click', () => {
  if (checkDataRegister) {
    showFormRegister();
  }
});
function showFormRegisterNoFormLogin() {
  showRegister.style.display = 'flex';
}
function hideAllForm() {
  showRegister.style.display = 'none';
  hideLogin.style.display = 'none';
}
var userOnl = false;
var logInOuModal = false;
var isLoginSuccessful = false;
function showFormLoginNoFormRegister() {
  hideLogin.style.display = 'flex';
}
headerUser.addEventListener('click', () => {
  if (logInOuModal) {
    $('.log-in-out-container').style.display = 'none';
    logInOuModal = false;
  } else {
    $('.log-in-out-container').style.display = 'flex';
    logInOuModal = true;
  }
});
$('.log-in-out-modal').addEventListener('click', () => {
  $('.log-in-out-container').style.display = 'none';
})
$('.log-in-out-container').addEventListener('click', (e) => {
  e.stopPropagation();
})
$('.log-in-out-content').addEventListener('click', () => {
  if (isLoginSuccessful) {
    headerUser.style.color = '';
    $('.log-in-out-content').innerText = 'Đăng nhập';
    $('.log-in-out-container').style.display = 'none';
    isLoginSuccessful = false;
  }else {
    $('.log-in-out-container').style.display = 'none';
    showFormLoginNoFormRegister();
  }
});
var accountInput = document.querySelector('.login__account');
var passwordInput = document.querySelector('.login__password');
loginBtn.onkeydown = function (e) {
  if (e.which == 13) {
    performLogin();
  }
}
function performLogin() {
  const accountInput = document.querySelector('#account1').value;
  const passwordInput = document.querySelector('#password1').value;
  const correctAccount = 'nguyenkhanhduy04';
  const correctPassword = 'duy123123';
  if (accountInput === correctAccount && passwordInput === correctPassword) {
    headerUser.style.color = '#000';
    isLoginSuccessful = true;
    userOnl = true;
    hideAllForm();
    $('.log-in-out-content').innerText = 'Đăng xuất';
    $('.log-in-out-container').style.display = 'none';
    showToast(successMsg);
  } else {
    showToast(failMsg);
  }
}
// async function performLogin() {
//   const accountInput = document.querySelector('#account1');
//   const passwordInput = document.querySelector('#password1');

//   try {
//     const response = await fetch('http://localhost:3000/account');
//     const data = await response.json();

//     let user = null;
//     for (const key in data) {
//       if (data[key].account === accountInput.value && data[key].password === passwordInput.value) {
//         user = data[key];
//         console.log('Successfully logged in');
//         break;
//       }
//     }
//     if (user) {
//       showUser.style.display = 'flex';
//       showUser1.style.display = 'flex';
//       showUser1.innerText = accountInput.value;
//       hideUser.style.display = 'none';
//       hideUser2.style.display = 'none';
//       isLoginSuccessful = true;
//       hideAllForm();
//       showToast(successMsg);
//     } else {
//       showToast(failMsg);
//     }
//   } catch (error) {
//     showToast(errorMsg);
//   }
// }

register.addEventListener('click', hideAllForm);
registerContainer.addEventListener('click', (e) => {
  e.stopPropagation();
})
modalLogin.addEventListener('click', hideAllForm);
loginContainer.addEventListener('click', (e) => {
  e.stopPropagation();
})
//Render new prodcts
var homeBtns = document.getElementsByClassName('home-button__select');
var categoryItems = document.getElementsByClassName('category__item');
var homeBtnsLength = homeBtns.length;
for (var i = 0; i < homeBtnsLength; ++i) {
  homeBtns[i].onclick = function () {
    for (var j = 0; j < homeBtns.length; ++j) {
      homeBtns[j].classList.remove('home-button__select-active');
    }
    this.classList.add('home-button__select-active');
    var newListPreduct = [...products];
    shuffleArray(newListPreduct);
    render(newListPreduct);
    listProductItem = $$('.home-product-item');
    addProductItemEventListeners();
  }
}
var categoryItemsLength = categoryItems.length;
for (var i = 0; i < categoryItemsLength; ++i) {
  categoryItems[i].onclick = function () {
    for (var j = 0; j < categoryItems.length; ++j) {
      categoryItems[j].classList.remove('category__item-active');
    }
    this.classList.add('category__item-active');
  }
}
var numberPage = 1;
var buttonForward = document.querySelector('.home-button__forward');
var buttonBack = document.querySelector('.home-button__back');
buttonForward.addEventListener('click', function (event) {
  event.preventDefault();
  if (numberPage + 1 <= 2) {
    ++numberPage;
    var element = document.querySelector('.home-page__first');
    element.innerHTML = numberPage;
  }
});
buttonBack.addEventListener('click', function (event) {
  event.preventDefault();
  if (numberPage - 1 >= 1) {
    --numberPage;
    var element = document.querySelector('.home-page__first');
    element.innerHTML = numberPage;
  }
});
// document.querySelector('.js-register-btn').addEventListener('click', function () {
//   // Lấy dữ liệu từ form
//   const account = document.querySelector('.js-data-register-account').value;
//   const password = document.querySelector('.js-data-register-password').value;
//   // Gửi yêu cầu POST sử dụng Fetch API
//   fetch('http://localhost:3000/account', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ account, password }),
//   })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//       // Xử lý phản hồi từ server nếu cần
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       // Xử lý lỗi nếu có
//     });
// });
const listProduct = ('.grid__col-left-2');
const productImage = $$('.home-product-item__img');
const nameProduct = $$('.home-product-item__name');
var productLength = products.length;
function updateUrlAndRender(e, newProducts) {
  e.preventDefault();
  render(newProducts);
  listProductItem = $$('.home-product-item');
  addProductItemEventListeners();
}
function updateUrlSportShoes(e) {
  e.preventDefault();
  render(products);
  listProductItem = $$('.home-product-item');
  addProductItemEventListeners();
}
function updateUrlSchoolShoes(e) {
  const newProducts = [
    {
      backgroundImage: 'https://down-vn.img.susercontent.com/file/b25adce0f770c8d0c29a504b3debf0f1',
      name: 'Giày đi học Nam Nữ Sandal Si Cao Su Nam Biti\'s BPM000300',
      oldPrice: '200.000',
      newPrice: '150.000',
    }
  ]
  updateUrlAndRender(e, newProducts);
}
function updateUrlLazyShoes(e) {
  const newProducts = [
    {
      backgroundImage: 'https://ananas.vn/wp-content/uploads/Pro_AV00003_1.jpeg',
      name: 'Giày lười Nam Nữ BASAS SIMPLE LIFE NE - MULE - BLACK',
      oldPrice: '200.000',
      newPrice: '150.000',
    }
  ]
  updateUrlAndRender(e, newProducts);
}
function updateUrlBootShoes(e) {
  const newProducts = [
    {
      backgroundImage: '//cbu01.alicdn.com/img/ibank/O1CN01tAwoGt1DxemEfoh3s_!!1712070283-0-cib.jpg',
      name: 'Giày boot Nam Nữ THEWOLF CHUNKY TASSEL LOAFER - TAN',
      oldPrice: '200.000',
      newPrice: '150.000',
    }
  ]
  updateUrlAndRender(e, newProducts);
}
function updateUrlBreadSlippers(e) {
  const newProducts = [
    {
      backgroundImage: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkjv544wyv0wfc',
      name: 'DÉP BÁNH MÌ MONOBO YM 01 THÁI LAN(5-8)',
      oldPrice: '200.000',
      newPrice: '150.000',
    }
  ]
  updateUrlAndRender(e, newProducts);
}
const numPage = $$('.pagination-link');
for (var i = 0; i < numPage.length; ++i) {
  numPage[i].onclick = function (e) {
    e.preventDefault();
    for (var j = 0; j < numPage.length; ++j) {
      numPage[j].classList.remove('pagination-link-active');
    }
    this.classList.add('pagination-link-active');
  }
}
//Pagination
var currentNumPage = 0;

function updateNumPrevPage(e) {
  e.preventDefault();
  for (var i = 0; i < numPage.length; ++i) {
    numPage[i].classList.remove('pagination-link-active');
  }
  if (currentNumPage == 0) {
    prevPageBtn.style.cursor = 'not-allowed'
    currentNumPage = 0;
  } else {
    currentNumPage -= 1;
    prevPageBtn.style.cursor = 'pointer'
  }
  numPage[currentNumPage].classList.add('pagination-link-active');
}

function updateNumNextPage(e) {
  e.preventDefault();
  for (var i = 0; i < numPage.length; ++i) {
    numPage[i].classList.remove('pagination-link-active');
  }
  if (currentNumPage  == numPage.length - 1) {
    if (currentNumPage + 1 === numPage.length) {
      nextPageBtn.style.cursor = 'not-allowed'
    }
    currentNumPage = numPage.length - 1;
  } else {
    currentNumPage += 1;
    nextPageBtn.style.cursor = 'pointer'
  }
  numPage[currentNumPage].classList.add('pagination-link-active');
}
prevPageBtn.addEventListener('click', updateNumPrevPage);
nextPageBtn.addEventListener('click', updateNumNextPage);
//Toast
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i> <span> Đăng nhập thành công </span>';
let successAdd = '<i class="fa-solid fa-circle-check"></i> <span> Thêm sản phẩm thành công </span>';
let successBuy = '<i class="fa-solid fa-circle-check"></i> <span> Mua sản phẩm thành công </span>';
let succesPay = '<i class="fa-solid fa-circle-check"></i> <span> Thanh toán sản phẩm thành công </span>';
let failMsg = '<i class="fa-solid fa-circle-xmark"></i> <span> Đăng nhập thất bại </span>';
let failBuy = '<i class="fa-solid fa-circle-xmark"></i> <span> Mua sản phẩm thất bại </span>';
let failAdd = '<i class="fa-solid fa-circle-xmark"></i> <span> Thêm sản phẩm thất bại </span>';
let failPay = '<i class="fa-solid fa-circle-xmark"></i> <span> Vui lòng nhập đầy đủ thông tin </span>';
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> <span> Xuất hiện lỗi khi đăng nhập </pan>';
let errorBuy = '<i class="fa-solid fa-circle-exclamation"></i> <span> Xuất hiện lỗi khi mua sản phẩm</pan>';
let errorAdd = '<i class="fa-solid fa-circle-exclamation"></i> <span> Xuất hiện lỗi khi thêm sản phẩm</pan>';

function showToast(msg) {
  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  // Cập nhật vị trí của toastBox
  updateToastBoxPosition();

  if (msg.includes('bại') || msg.includes('Vui lòng')) {
    toast.classList.add('failed');
  }
  if (msg.includes('lỗi')) {
    toast.classList.add('error');
  }

  setTimeout(() => {
    toast.remove();
    // Cập nhật lại vị trí của toastBox sau khi loại bỏ toast
    updateToastBoxPosition();
  }, 2000);
}

// Hàm cập nhật vị trí của toastBox
function updateToastBoxPosition() {
  var currentScroll = window.scrollY || window.pageYOffset;
  var windowHeight = window.innerHeight;
  var toastBoxHeight = toastBox.offsetHeight;

  // Đặt bottom của toastBox với giá trị 30px so với màn hình hiện tại
  toastBox.style.bottom = (windowHeight - currentScroll - toastBoxHeight + 30) + 'px';
}

// Lắng nghe sự kiện scroll và cập nhật vị trí của toastBox
window.addEventListener('scroll', updateToastBoxPosition);
//Sắp xếp giá thấp đến cao
var listProductItem = $$('.home-product-item');
lowPricetoHighPrice.addEventListener('click', function () {
  const sortedProductsLowToHigh = [...products];
  sortedProductsLowToHigh.sort((a, b) => {
    const priceA = parseInt(a.newPrice.replace(/\D/g, ''), 10);
    const priceB = parseInt(b.newPrice.replace(/\D/g, ''), 10);
    return priceA - priceB;
  });
  render(sortedProductsLowToHigh);
  homeBtncostText.innerText = 'Giá: Thấp đến cao';
  listProductItem = $$('.home-product-item');
  addProductItemEventListeners();
})
//Sắp xếp giao cao đến thấp
hightPricetoLowPrice.addEventListener('click', function () {
  const sortedProductsLowToHigh = [...products];
  sortedProductsLowToHigh.sort((a, b) => {
    const priceA = parseInt(a.newPrice.replace(/\D/g, ''), 10);
    const priceB = parseInt(b.newPrice.replace(/\D/g, ''), 10);
    return priceB - priceA;
  });
  render(sortedProductsLowToHigh);
  homeBtncostText.innerText = 'Giá: Cao đến thấp';
  listProductItem = $$('.home-product-item');
  addProductItemEventListeners();
})
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


//Giao diện mua hàng
function showBuyProductModal(urlImg, name, oldPrice, newPrice) {
  $('.buy-product-modal').style.position = 'fixed';
  $('.buy-product-container').style.display = 'flex';
  $('.buy-product__img').style.backgroundImage = `url(${urlImg})`
  $('.name-buy-product').innerText = name;
  $('.name-buy-product').style.fontSize = '1.8rem';
  $('.name-buy-product').style.lineHeight = '20px';
  $('.old-price').innerHTML = `<s>${oldPrice}</s>`;
  $('.new-price').innerHTML = `${newPrice}`;
}
function addProductItemEventListeners() {
  for (var i = 0; i < listProductItem.length; i++) {
    listProductItem[i].addEventListener('click', function () {
      var productImgElement = this.querySelector('.home-product-item__img');
      var productNameElement = this.querySelector('.home-product-item__name');
      var productOldPriceElement = this.querySelector('.home-product-item__price-old');
      var productNewPriceElement = this.querySelector('.home-product-item__price-new');
      if (productNameElement && productOldPriceElement && productNewPriceElement && productImgElement) {
        var backgroundImageStyle = getComputedStyle(productImgElement).backgroundImage;
        var imageUrl = backgroundImageStyle.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        var productName = productNameElement.innerText;
        var productName = productNameElement.innerText;
        var productOldPrice = productOldPriceElement.innerText;
        var productNewPrice = productNewPriceElement.innerText;
        showBuyProductModal(imageUrl, productName, productOldPrice, productNewPrice);
      }
    });
  }
}

addProductItemEventListeners();
function closeBuyProductModal() {
  $('.buy-product-modal').style.position = 'initial';
  $('.buy-product-container').style.display = 'none';
}
const buyProductModal = $('.buy-product-modal');
buyProductModal.addEventListener('click', closeBuyProductModal);
$('.buy-product-container').addEventListener('click', (e) => {
  e.stopPropagation();
})
var districtData = {
  "AG": ["Châu Thành", "Châu Phú", "Long Xuyên", "An Phú"],
  "BRVT": ["Bà Rịa", "Vũng Tàu", "Xuyên Mộc", "Long Điền"],
  "BL": ["Bạc Liêu", "Hồng Dân", "Vĩnh Lợi", "Giá Rai"],
  "BK": ["Bắc Kạn", "Bắc Cạn", "Chợ Mới", "Pác Nặm"],
  "BG": ["Bắc Giang", "Hiệp Hòa", "Lạng Giang", "Tân Yên"],
  "BN": ["Bắc Ninh", "Gia Bình", "Lương Tài", "Tiên Du"],
  "BT": ["Bến Tre", "Ba Tri", "Châu Thành", "Mỏ Cày Bắc"],
  "BD": ["Bình Dương", "Dĩ An", "Thuận An", "Tân Uyên"],
  "BĐ": ["Bình Định", "Quy Nhơn", "An Nhơn", "Hoài Ân"],
  "BP": ["Bình Phước", "Đồng Xoài", "Chơn Thành", "Bù Đăng"],
  "BTh": ["Bình Thuận", "Phan Thiết", "La Gi", "Bắc Bình"],
  "CM": ["Cà Mau", "Cà Mau", "Thới Bình", "Năm Căn"],
  "CB": ["Cao Bằng", "Cao Bằng", "Bảo Lâm", "Bảo Lạc"],
  "DL": ["Đắk Lắk", "Buôn Ma Thuột", "Ea Kar", "Krông Buk"],
  "DN": ["Đắk Nông", "Gia Nghĩa", "Cư Jút", "Đắk R'Lấp"],
  "DB": ["Điện Biên", "Điện Biên Phủ", "Mường Lay", "Tủa Chùa"],
  "DNai": ["Đồng Nai", "Biên Hòa", "Long Khánh", "Nhơn Trạch"],
  "DTh": ["Đồng Tháp", "Cao Lãnh", "Hồng Ngự", "Tháp Mười"],
  "GL": ["Gia Lai", "Pleiku", "An Khê", "Ayun Pa"],
  "HG": ["Hà Giang", "Hà Giang", "Quản Bạ", "Bắc Mê"],
  "HNam": ["Hà Nam", "Phủ Lý", "Duy Tiên", "Lý Nhân"],
  "HN": ["Hà Nội", "Hoàn Kiếm", "Ba Đình", "Cầu Giấy"],
  "HT": ["Hà Tĩnh", "Hà Tĩnh", "Kỳ Anh", "Hồng Lĩnh"],
  "HD": ["Hải Dương", "Hải Dương", "Chí Linh", "Nam Sách"],
  "HP": ["Hải Phòng", "Hồng Bàng", "Ngô Quyền", "Lê Chân"],
  "HG": ["Hậu Giang", "Vị Thanh", "Ngã Bảy", "Châu Thành"],
  "HB": ["Hòa Bình", "Hòa Bình", "Mai Châu", "Kỳ Sơn"],
  "HY": ["Hưng Yên", "Hưng Yên", "Văn Lâm", "Yên Mỹ"],
  "KH": ["Khánh Hòa", "Nha Trang", "Cam Ranh", "Ninh Hòa"],
  "KG": ["Kiên Giang", "Rạch Giá", "Hà Tiên", "Châu Thành"],
  "KT": ["Kon Tum", "Kon Tum", "Sa Thầy", "Kon Plông"],
  "LC": ["Lai Châu", "Lai Châu", "Tam Đường", "Sìn Hồ"],
  "LĐ": ["Lâm Đồng", "Đà Lạt", "Bảo Lộc", "Di Linh"],
  "LS": ["Lạng Sơn", "Lạng Sơn", "Cao Lộc", "Văn Quan"],
  "LCai": ["Lào Cai", "Lào Cai", "Sa Pa", "Bảo Thắng"],
  "LA": ["Long An", "Tân An", "Kiến Tường", "Cần Giuộc"],
  "ND": ["Nam Định", "Nam Định", "Mỹ Lộc", "Giao Thủy"],
  "NA": ["Nghệ An", "Vinh", "Cửa Lò", "Quỳ Châu"],
  "NB": ["Ninh Bình", "Ninh Bình", "Tam Điệp", "Yên Mô"],
  "NT": ["Ninh Thuận", "Phan Rang-Tháp Chàm", "Ninh Hải", "Ninh Phước"],
  "PT": ["Phú Thọ", "Việt Trì", "Thanh Ba", "Cẩm Khê"],
  "PY": ["Phú Yên", "Tuy Hòa", "Sông Cầu", "Tuy An"],
  "QB": ["Quảng Bình", "Đồng Hới", "Ba Đồn", "Quảng Trạch"],
  "QNam": ["Quảng Nam", "Tam Kỳ", "Hội An", "Duy Xuyên"],
  "QNgai": ["Quảng Ngãi", "Quảng Ngãi", "Bình Sơn", "Sơn Tây"],
  "QNH": ["Quảng Ninh", "Hạ Long", "Cẩm Phả", "Uông Bí"],
  "QT": ["Quảng Trị", "Đông Hà", "Quảng Trạch", "Hướng Hóa"],
  "ST": ["Sóc Trăng", "Sóc Trăng", "Long Phú", "Ngã Năm"],
  "SL": ["Sơn La", "Sơn La", "Mường La", "Thuận Châu"],
  "TN": ["Tây Ninh", "Tây Ninh", "Trảng Bàng", "Gò Dầu"],
  "TB": ["Thái Bình", "Thái Bình", "Quỳnh Phụ", "Hưng Hà"],
  "TN": ["Thái Nguyên", "Thái Nguyên", "Sông Công", "Phổ Yên"],
  "TH": ["Thanh Hóa", "Thanh Hóa", "Bỉm Sơn", "Sầm Sơn"],
  "TT-H": ["Thừa Thiên-Huế", "Huế", "Hương Thủy", "Hương Trà"],
  "TG": ["Tiền Giang", "Mỹ Tho", "Cai Lậy", "Cần Thơ"],
  "TV": ["Trà Vinh", "Trà Vinh", "Tiểu Cần", "Càng Long"],
  "TQ": ["Tuyên Quang", "Tuyên Quang", "Lâm Bình", "Nà Hang"],
  "VL": ["Vĩnh Long", "Vĩnh Long", "Long Hồ", "Mang Thít"],
  "VP": ["Vĩnh Phúc", "Vĩnh Yên", "Phúc Yên", "Tam Đảo"],
  "YB": ["Yên Bái", "Yên Bái", "Nghĩa Lộ", "Lục Yên"],
  "PQ": ["Phú Quốc", "Phú Quốc", "Kiên Hải", "Kiên Lương"],
  "HCM": ["Thành phố Hồ Chí Minh", "Quận 1", "Quận 3", "Quận 5"],
  "CT": ["Cần Thơ", "Ninh Kiều", "Bình Thủy", "Ô Môn"],
  "DN": ["Đà Nẵng", "Hải Châu", "Thanh Khê", "Sơn Trà"],
  "HP": ["Hải Phòng", "Hồng Bàng", "Ngô Quyền", "Lê Chân"]
};
function addOption(selectElement, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  selectElement.add(option);
}
function updateDistricts() {
  var provinceSelect = document.getElementById("province");
  var districtSelect = document.getElementById("district");

  // Xóa tất cả các tùy chọn hiện tại trong thẻ districtSelect
  districtSelect.innerHTML = "";

  // Lấy giá trị đã chọn từ thẻ provinceSelect
  var selectedProvince = provinceSelect.value;

  // Lấy dữ liệu về các huyện/thành phố tương ứng với tỉnh đã chọn
  var districts = districtData[selectedProvince] || [];

  // Thêm các tùy chọn cho huyện/thành phố
  for (var i = 0; i < districts.length; i++) {
    addOption(districtSelect, districts[i], districts[i]);
  }
}
var currentSizeElement = document.getElementById("currentSize");

function changeSize(delta) {
  var currentSize = parseInt(currentSizeElement.innerText);

  var newSize = currentSize + delta;

  newSize = Math.max(1, newSize);

  currentSizeElement.innerText = newSize;
}
const addPrBtn = $('.add-to-cart');
const buyPrBtn = $('.add-now');
const toastbox = $('.toastBox');
let total = '0';
function formatNumberWithDot(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
var dataAddProduct = '';
function addProduct(img, name, price, quantity) {
  var numericValue1 = parseFloat(price.replace(/\./g, ''))
  console.log(numericValue1);
  if (numericValue1 < 1000000) {
    return `
    <tr>
      <td class="">
      <a href="#delete" data-toggle="modal" data-title="Delete your product?" onclick="deleteProductRow(this)">
              <i class="fa-solid fa-trash" style="color: red;"></i>
          </a>
      </td>
      <td>
          <div class=""
              style="background-image: url(${img}); width: 60px; height: 60px; background-size: cover;">
          </div>
      </td>
      <td class="truncate">${name}</td>
      <td class="text-center quantity">${quantity} x</td>
      <td class="price" style="padding-left: 48px">${price}</td>
  </tr>`
  } else {
    return `
    <tr>
      <td class="">
      <a href="#delete" data-toggle="modal" data-title="Delete your product?" onclick="deleteProductRow(this)">
              <i class="fa-solid fa-trash" style="color: red;"></i>
          </a>
      </td>
      <td>
          <div class=""
              style="background-image: url(${img}); width: 60px; height: 60px; background-size: cover;">
          </div>
      </td>
      <td class="truncate">${name}</td>
      <td class="text-center quantity">${quantity} x</td>
      <td class="price" style="padding-left: 35px">${price}</td>
  </tr>`
  }
}
addPrBtn.addEventListener('click', function () {
  var districtSelect = document.getElementById("district");
  var provinceSelect = document.getElementById("province");
  if (districtSelect.value !== "" && provinceSelect.value !== "") {
    // Lấy giá trị vị trí cuộn hiện tại
    var currentScroll = window.scrollY || window.pageYOffset;
    // Đặt bottom của toastBox với giá trị 30px so với scroll hiện tại
    toastbox.style.bottom = (currentScroll + 30) + 'px';
    const numberToAdd = parseFloat($('.new-price').innerText);
    const quantity = parseFloat($('.cur-size').innerText);
    if (!isNaN(numberToAdd)) {
      total = (parseFloat(total) + numberToAdd * quantity).toString();
      let formattedTotal = formatNumberWithDot(total);

      $('.header-cart .cost').innerHTML = formattedTotal + '.000';
      showToast(successAdd);
      var productImgElement = $('.buy-product__img');
      var productNameElement = $('.name-buy-product');
      var productPriceElement = $('.new-price');
      var productQuantityElement = $('.cur-size');
      if (productImgElement && productNameElement && productPriceElement && productQuantityElement) {
        var backgroundImageStyle = getComputedStyle(productImgElement).backgroundImage;
        var imageUrl = backgroundImageStyle.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        var productName = productNameElement.innerText;
        var productPrice = productPriceElement.innerText;
        var productQuantity = productQuantityElement.innerText;
        var newProductPrice = (parseFloat(productPrice) * parseFloat(productQuantity)).toString();
        document.getElementById('province1').value = document.getElementById('province').options[document.getElementById('province').selectedIndex].getAttribute("value1");
        $('#district1').value = $('#district').value;
        totalProduct += parseFloat(productQuantity);
        if (totalProduct > 0) {
          $('.product-container').innerText = 'Sản phẩm có trong giỏ hàng';
          $('.num-product').innerText = totalProduct.toString();
        }
      }
      dataAddProduct += addProduct(imageUrl, productName, formatNumberWithDot(newProductPrice + '.000'), productQuantity);
    }
  } else {
    // Lấy giá trị vị trí cuộn hiện tại
    var currentScroll = window.scrollY || window.pageYOffset;
    // Đặt bottom của toastBox với giá trị 30px so với scroll hiện tại
    toastbox.style.bottom = (currentScroll + 30) + 'px';
    showToast(failAdd);
  }
});


buyPrBtn.addEventListener('click', function () {
  var districtSelect = document.getElementById("district");
  var provinceSelect = document.getElementById("province");
  if (districtSelect.value !== "" && provinceSelect.value !== "") {
    showToast(successBuy);
  } else {
    showToast(failBuy);
  }
});
//Shopping cart

const headerNavs = $$('.shopping-header-nav');
const btnNext = $('.next-infor-btn');
const btnPrev = $('.prev-infor-btn');
const tableCart = $('.shopping-cart-body-1');
const formInfor = $('.shopping-cart-body-2');
const paymentForm = $('.shopping-cart-body-3');
const btnCart = $('.header-nav-cart');
const formPayment1 = $('.shopping-cart');
const formPayment2 = $('.shopping-cart-container');
var indexCartHeadNav = 0;
function showFormPayment(e) {
  e.preventDefault();
  $('.spc-cost').innerText = $('.header-cart .cost').innerHTML;
  // $('.total').innerText = formatNumberWithDot((parseFloat($('.header-cart .cost').innerHTML) + 55).toString()) + '.000 VNĐ';
  $('.body-table').innerHTML = dataAddProduct;
  formPayment1.style.position = 'fixed';
  formPayment2.style.display = 'flex';
  btnCart.classList.add('active');
  addActiveHeaderNav(-1);
}
btnCart.addEventListener('click', showFormPayment)
function closeShoppingCart() {
  formPayment1.style.position = 'initial';
  formPayment2.style.display = 'none';
  btnCart.classList.remove('active');
  addActiveHeaderNav(1);
}
function deleteProductRow(link) {
  var rowToDelete = link.closest('tr');
  if (rowToDelete) {
    totalProduct -= parseFloat($('.quantity').innerText.replace(/\./g, ''));
    if (totalProduct == 0) {
      $('.product-container').innerText = 'Chưa có sản phẩm trong giỏ hàng';
    }
    $('.num-product').innerText = totalProduct.toString();
    rowToDelete.remove();
  } else {
    console.error('Parent <tr> element not found.');
  }
  dataAddProduct = $('.body-table').innerHTML;
  var currentPrice = $('.body-header .spc-cost').innerText;
  var priceProduct = rowToDelete.querySelector('.price').innerText;
  var numericValue1 = parseFloat(currentPrice.replace(/\./g, ''))
  var numericValue2 = parseFloat(priceProduct.replace(/\./g, ''))
  // console.log(numericValu1, " ", numericValue2);
  $('.body-header .spc-cost').innerText = formatNumberWithDot((numericValue1 - numericValue2).toString());
  $('.header-cart .cost').innerText = formatNumberWithDot((numericValue1 - numericValue2).toString());;
}
function stepMinus() {
  if (indexCartHeadNav == 0) {
    indexCartHeadNav = 0;
  } else {
    indexCartHeadNav--;
  }
  for (var i = 0; i < headerNavs.length; i++) {
    if (headerNavs[i].classList.contains('active')) {
      headerNavs[i].classList.remove('active');
    }
  }
  headerNavs[indexCartHeadNav].classList.add('active');
}
function stepAdd() {
  if (indexCartHeadNav == 3) {
    indexCartHeadNav = 3;
  } else {
    indexCartHeadNav++;
  }
  if (indexCartHeadNav !== 3) {
    for (var i = 0; i < headerNavs.length; i++) {
      if (headerNavs[i].classList.contains('active')) {
        headerNavs[i].classList.remove('active');
      }
    }
    headerNavs[indexCartHeadNav].classList.add('active');
  }
}

btnPrev.addEventListener('click', function () {
  stepMinus();
  if (indexCartHeadNav == 0) {
    tableCart.style.display = 'flex';
    paymentForm.style.display = 'none';
    formInfor.style.display = 'none';
    btnPrev.style.display = 'none';
  } else if (indexCartHeadNav == 1) {
    tableCart.style.display = 'none';
    paymentForm.style.display = 'none';
    formInfor.style.display = 'grid';
    btnPrev.style.display = 'flex';
  } else if (indexCartHeadNav == 2) {
    formInfor.style.display = 'none';
    btnPrev.style.display = 'flex';
    paymentForm.style.display = 'flex';
  }
})

btnNext.addEventListener('click', function () {
  stepAdd();
  tableCart.style.display = 'none';
  if (indexCartHeadNav == 1) {
    formInfor.style.display = 'grid';
    btnPrev.style.display = 'flex';
    paymentForm.style.display = 'none';
  } else if (indexCartHeadNav == 2) {
    formInfor.style.display = 'none';
    btnPrev.style.display = 'flex';
    paymentForm.style.display = 'flex';
  } else if (indexCartHeadNav == 3) {
    if (totalProduct > 0 && checkInforCustomer && checkInforCard) {
      showToast(succesPay);
    } else {
      showToast(failPay);
    }
  }
});
var checkInforCustomer = false;
var checkInforCard = false;
function getClassAtIndex(element, index) {
  // Lấy class của phần tử được click
  var classList = element.classList;

  // Chuyển classList thành mảng để truy cập class thứ hai (nếu có)
  var classes = Array.from(classList);

  // Lấy class thứ hai (nếu có) và hiển thị
  if (classes.length > index) {
    var desiredClass = classes[index];
    if (desiredClass) {
      $('.qr-code-img img').src = `./assets/css/img/${desiredClass}.jpg`;
    }
  } else {
    return undefined;
  }
}



