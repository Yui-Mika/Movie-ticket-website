// Danh sách phim demo (có thể mở rộng hoặc lấy từ JSON/api backend)
const movies = [
  {
    // Thông tin phim thứ 3 - Elio
    id: "elio",
    title: "Elio Cậu Bé Đến Từ Trái Đất",
    poster: "../img/showing_movie3.jpg",
    genre: "Animation, Adventure, Comedy, Fantasy",
    description: `Elio là một cậu bé đam mê vũ trụ với trí tưởng tượng phong phú. Một hôm, cậu bất ngờ phải tham gia một cuộc phiêu lưu ngoài vũ trụ, nơi cậu phải xây dựng mối quan hệ mới với các dạng sống ngoài hành tinh. Elio phải vượt qua cuộc chiến ở quy mô liên thiên hà và khám phá ra con người thực sự của mình. 
    Trong cuộc phiêu lưu dở khóc dở cười trên màn ảnh rộng của Pixar, Elio - cậu bé mê mẩn người ngoài hành tinh - bất ngờ bị cuốn vào Liên Hiệp Thiên Hà, một vũ trụ liên hành tinh đầy kỳ diệu, nơi quy tụ các loài sinh vật thông minh khắp thiên hà. Trớ trêu thay, Elio lại bị hiểu nhầm là người đứng đầu Trái Đất. Giờ đây, cậu phải vượt qua những rắc rối mang quy mô vũ trụ, kết nối với những người bạn không ngờ tới, và tìm cách biến giấc mơ lớn nhất đời mình thành hiện thực.`,
    director: "Adrian Molina",
    cast: "America Ferrera, Jameela Jamil, Brad Garrett",
    trailer: "https://www.youtube.com/embed/ETVi5_cnnaE?si=3Ly6of2OkaadhHZ3",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
    // Thêm các thông tin khác nếu cần
  },


  // Thêm các phim khác...
  {
    // Thông tin phim thứ 2 - M3GAN 2.0
    id: "m3gan",
    title: "M3GAN 2.0",
    poster: "../img/showing_movie2.jpg",
    genre: "Horror, Science, Fiction",
    description: `M3GAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp. Kẻ gian đã tạo ra một robot AI khác với chức năng tương tự MEGAN, nhưng được trang bị sức mạnh chiến đấu "khủng" hơn mang tên Amelia. Để "đối đầu" với Amelia, Gemma buộc phải "hồi sinh" và cải tiến MEGAN, hứa hẹn một trận chiến "nảy lửa" trên màn ảnh vào năm 2025.`,
    director: "Gerard Johnstone",
    cast: "Allison Williams, Violet McGraw",
    trailer: "https://www.youtube.com/embed/IYLHdEzsk1s?si=ZfyzkBMC5A_QlEEU",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
  },

  // ...thêm các phim khác

  // Thông tin phim thứ 1 - How to Train Your Dragon
  {
    id: "httyd",
    title: "How to Train Your Dragon",
    poster: "../img/showing_movie1.jpg",
    genre: "Action, Adventure, Comedy, Fantasy",
    description: `Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng.
    Giống như bộ phim hay gốc từ năm 2010, Bí Kíp Luyện Rồng phiên bản live-action lần này diễn ra trên Đảo Berk, nơi người Viking và rồng đã là kẻ thù không đội trời chung trong nhiều thế hệ. Nhưng khi Hiccup (Mason Thames) – con trai của Tù trưởng Stoick the Vast đi ngược lại truyền thống hàng thế kỷ để kết bạn với Toothless - một con rồng Night Fury, chính giây phút đó anh ấy đã phá vỡ quy tắc vốn có của cộng đồng và mở ra sự căng thẳng tột cùng cho cả người Viking và rồng.`,
    director: "Dean DeBlois",
    cast: "Jay Baruchel, America Ferrera, Cate Blanchett",
    trailer: "https://www.youtube.com/embed/22w7z_lT6YM?si=S-CBfBfkdjsTicGr",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
  },

  // Thông tin phim thứ 4 - Ma Không Đầu
  {
    id: "makhongdau",
    title: "Ma Không Đầu",
    poster: "../img/showing_movie4.jpg",
    genre: "Horror, Comedy",
    description: `Ma Không Đầu là một bộ phim kinh dị Việt Nam xoay quanh với nghề nghiệp "độc lạ" hốt xác và lái xe cứu thương. Bộ đôi Tiến Luật và Ngô Kiến Huy hứa hẹn mang đến những tràng cười không ngớt cho khán giả qua hành trình tìm xác có một không hai trên màn ảnh Việt. 
    Nhờ sự trợ giúp của thế lực tâm linh, họ không chỉ đối mặt với những tình huống "dở khóc dở cười" mà còn khám phá ra những bí mật rợn người ẩn sau những thi thể. Liệu họ có hoàn thành nhiệm vụ "khó nhằn" này hay sẽ gặp phải những "biến cố" nào?`,
    director: "Bùi Văn Hải",
    cast: "Ngô Kiến Huy, Tiến Luật, NSND Hồng Vân, Hữu Châu, Đại Nghĩa",
    trailer: "https://www.youtube.com/embed/-dLuy8iNpL0?si=Hb4XkxCIVqv05Eag",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
  },

  // Thông tin phim thứ 5 - Big Deal
  {
    id: "bigdeal",
    title: "Big Deal",
    poster: "../img/showing_movie5.jpg",
    genre: "Drama, Suspense",
    description: `Mượn Rượu Đẩy Kèo lấy bối cảnh Hàn Quốc vào năm 1997, khi cuộc khủng hoảng kinh tế tài chính đang hoành hành khắp châu Á khiến Gukbo - công ty sản xuất Soju số 1 đất nước rơi vào tình trạng cận kề phá sản. 
    In-beom (Lee Je-hoon) - chàng trai trẻ đầy tham vọng đại diện cho tập đoàn đầu tư toàn cầu Solquin đã trở về quê hương với quyết tâm thâu tóm Gukbo. Để thực hiện âm mưu này, In-beom đội lốt một chuyên gia tư vấn ngây thơ, 
    tiếp cận Jong-rok (Yoo Hai-jin) - giám đốc vô cùng trung thành với Gukbo, đang khao khát đưa công ty quay lại thời hoàng kim. Nhưng càng đào sâu vào đế chế Gukbo, In-beom càng nhận ra đây thực sự là một cuộc chiến xảo quyệt với rất nhiều “cú twist”, dẫn đến kết cục không ngờ dành cho tất cả.`,
    director: "Choi Yoon Jin",
    cast: "Yoo Hae Jin, Lee Je Hoon, Son Hyun Joo",
    trailer: "https://www.youtube.com/embed/prHGL-pAgYY?si=BdMkjgByQZtoa2ph",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
  },

  // Thông tin phim thứ 6 - 28 years later
  {
    id: "28yearslater",
    title: "28 Years Later",
    poster: "../img/showing_movie6.jpg",
    genre: "Horror, Thriller",
    description: `Cơn ác mộng chưa kết thúc. Virus trở lại, kéo theo bóng tối bao trùm nước Anh. Một hành trình sinh tử: cậu bé tìm kiếm bác sĩ để cứu mẹ mình, băng qua vùng đất chết chóc đầy xác sống tiến hóa và những kẻ nguy hiểm ẩn sau gương mặt tử tế. Liệu niềm hy vọng cuối cùng có đủ để cứu họ khỏi vực thẳm tuyệt vọng?
    28 Years Later là phần tiếp theo của bộ phim kinh dị nổi tiếng 28 Days Later. Bộ phim theo chân một nhóm người sống sót sau đại dịch virus đã biến con người thành những sinh vật hung hãn. Họ phải đối mặt với những thử thách mới và tìm cách sống sót trong thế giới đầy rẫy nguy hiểm.`,
    director: "Danny Boyle",
    cast: "Cillian Murphy, Naomie Harris, Brendan Gleeson",
    trailer: "https://www.youtube.com/embed/mcvLKldPM08?si=2H9DL8PSukJtaqma",
    showtimes: [
      {
        date: "2024-07-06",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["09:15", "16:00", "21:30"]
          },
          {
            name: "Storia Hà Nội",
            times: ["09:30", "18:30"]
          }
        ]
      },
      {
        date: "2024-07-07",
        cinemas: [
          {
            name: "Storia Hồ Chí Minh",
            times: ["11:00", "17:00"]
          }
        ]
      }
    ]
  }
];


// Lấy id phim từ URL
function getMovieId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Tìm phim theo id
function getMovieById(id) {
  return movies.find(m => m.id === id);
}

function renderMovieDetail(movie) {
  if (!movie) {
    document.getElementById('movie-detail').innerHTML = "<h2>Không tìm thấy phim này!</h2>";
    return;
  }

  // Render lịch chiếu động (ví dụ cho ngày đầu tiên)
  let showtimeHTML = '';
if (movie.showtimes && movie.showtimes.length > 0) {
  showtimeHTML += `
    <div class="movie-showtimes mt-5">
      <h2 class="section-title red">Lịch Chiếu</h2>
      <div class="showtimes-date mb-3">
        <button class="date-btn active">Hôm Nay<br><span>06/07</span></button>
        <button class="date-btn">Thứ Bảy<br><span>07/07</span></button>
        <button class="date-btn">Chủ Nhật<br><span>08/07</span></button>
      </div>
      <hr>
      <div class="theater-list">
  `;
  movie.showtimes[0].cinemas.forEach(cinema => {
    showtimeHTML += `
      <div class="theater-card">
        <div class="cinema-name">${cinema.name}</div>
        <div class="showtimes-list">
          ${cinema.times.map(time => `<button class="showtime-btn">${time}</button>`).join('')}
        </div>
      </div>
    `;
  });
  showtimeHTML += `</div></div>`;
}


  // Render chi tiết phim + nội dung phim + lịch chiếu
  document.getElementById('movie-detail').innerHTML = `
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="${movie.poster}" class="img-fluid rounded-3 shadow mb-3" style="max-height:420px" alt="${movie.title}">
        <div class="mt-4">
          <a href="index.html" class="btn btn-outline-darkred fw-bold px-4">← Về trang phim</a>
        </div>
      </div>
      <div class="col-md-8">
        <h2 class="fw-bold" style="color:darkred">${movie.title}</h2>
        <ul style="list-style:none;padding-left:0">
          <li><b>Genres:</b> ${movie.genre}</li>
          <li><b>Director:</b> ${movie.director}</li>
          <li><b>Actor:</b> ${movie.cast}</li>
        </ul>
        <div class="mb-4">
          <iframe width="100%" height="320" src="${movie.trailer}" frameborder="0" allowfullscreen></iframe>
        </div>
        <a href="#" class="btn btn-modal-primary me-2 mb-3">Đặt vé ngay</a>
      </div>
    </div>
    <div class="movie-detail-bottom container px-0">
      <div class="movie-description mt-5">
        <h2 class="section-title">Nội Dung Phim</h2>
        <div class="movie-desc">${movie.description.replace(/\n/g, '<br>')}</div>
      </div>
      ${showtimeHTML}
    </div>
  `;
}


// Khi trang load
document.addEventListener("DOMContentLoaded", function() {
  const id = getMovieId();
  const movie = getMovieById(id);
  renderMovieDetail(movie);
});
