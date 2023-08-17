const express = require('express');
const cors = require('cors');

const app = express();
<<<<<<< HEAD
app.use(cors());

// Middleware untuk mengizinkan CORS
app.use((req, res, next) => {
    // Ganti 'https://qouteislam.vercel.app' dengan domain Anda
    res.setHeader('Access-Control-Allow-Origin', 'https://qouteislam.vercel.app');
    next();
=======

// Middleware untuk mengizinkan CORS
app.use((req, res, next) => {
  // Ganti 'https://qouteislam.vercel.app' dengan domain Anda
  res.setHeader('Access-Control-Allow-Origin', 'https://qouteislam.vercel.app');
  next();
>>>>>>> 6efa4c3047b1848d8e2674c23e4e15dbf8d6773b
});

app.get('/data', (req, res) => {
    const data = [
        { author: 'Abu Bakar', quote: '"Salah satu dosa terburuk adalah seseorang yang menganggap remeh dosanya."' },
        { author: 'Abu Bakar', quote: '"Siapa yang menjauhkan diri dari sifat suka mengeluh maka berarti ia mengundang kebahagiaan."' },
        { author: 'Abu Bakar', quote: '"Tanpa tindakan, pengetahuan tidak ada gunanya dan pengetahuan tanpa tindakan itu sia-sia."' },
        { author: 'Abu Bakar', quote: '"Kecerdasan yang paling cerdas adalah takwa, dan kebodohan yang paling bodoh adalah maksiat."' },
        { author: 'Abu Bakar', quote: '"Jadilah seperti pohon kayu yang lebat buahnya, tumbuh di tepi jalan. Dilempar buahnya dengan batu, tetapi tetap dibalas dengan buah."' },
        { author: 'Abu Bakar', quote: '"Sesama muslim seharusnya hidup seperti layaknya saudara."' },
        { author: 'Abu Bakar', quote: '"Memang sulit untuk bersabar, tapi menyia-nyiakan pahala dari sebuah kesabaran itu jauh lebih buruk."' },
        { author: 'Abu Bakar', quote: '"Kebenaran terbesar adalah kejujuran, dan kepalsuan terbesar adalah ketidakjujuran."' },
        { author: 'Abu Bakar', quote: '"Tidak boleh seorang muslim menghina muslim yang lain. Yang kecil pada kaum muslimin, adalah besar pada sisi Allah."' },
        { author: 'Abu Bakar', quote: '"Adalah hal yang memalukan bahwa seekor burung justru bangun lebih awal daripada kamu di pagi hari."' },
        { author: 'Abu Bakar', quote: '"Ilmu pengetahuan adalah kehidupan pikiran."' },
        { author: 'Abu Bakar', quote: '"Tanpa ilmu, amal itu tidak ada gunanya. Sedangkan ilmu tanpa amal adalah hal yang sia-sia."' },
        { author: 'Abu Bakar', quote: '"Hidup akan berlalu, namun kematian sangatlah dekat. "' },
        { author: 'Abu Bakar', quote: '"Waspadalah terhadap kesombongan, sebab pada akhirnya kamu kelak akan kembali ke tanah dan tubuhmu akan dimakan oleh cacing."' },
        { author: 'Abu Bakar', quote: '"Jangan memandang rendah kepada setiap muslim, bahkan orang yang paling lemah imannya sekalipun adalah besar di mata Allah."' },
        { author: 'Abu Bakar', quote: '"Amal kebajikan adalah pengawal yang akan menjaga kita melawan serangan penderitaan."' },
        { author: 'Abu Bakar', quote: '"Bersedia menderita demi menghilangkan penderitaan orang lain adalah intisari dari kemurahan hati."' },
        { author: 'Abu Bakar', quote: '"Jika nasehat yang baik tidak memberikan pengaruh bagi perubahan seseorang, maka ketahuilah bahwa hatinya itu kosong."' },
        { author: 'Abu Bakar', quote: '"Mau bersusah payah untuk menghilangkan penderitaan orang lain adalah esensi sejati dari kemurahan hati."' },
        { author: 'Abu Bakar', quote: '"Ada kebesaran dalam rasa takut akan Allah, kepuasan dalam beriman kepada Allah, dan kehormatan dalam kerendahan hati."' },
        { author: 'Abu Bakar', quote: '"Memaafkan yang paling afdhal adalah ketika kuat dan sanggup. Dan sebaik-baik kesengajaan adalah ketika bersungguh-sungguh (berniat)."' },
        { author: 'Abu Bakar', quote: '"Tidak ada manfaat dari uang jika tidak dibelanjakan di jalan Allah. Tidak ada kebaikan dalam diri seseorang jika kebodohannya mengalahkan kesabarannya."' },
        { author: 'Abu Bakar', quote: '"Tidak ada manfaat dari uang jika tidak dibelanjakan di jalan Allah. Tidak ada kebaikan dalam diri seseorang jika kebodohannya mengalahkan kesabarannya."' },
        { author: 'Abu Bakar', quote: '"Tinggalkanlah musuhumu, dan waspadalah terhadap temanmu, kecuali yang terpercaya! Karena orang kepercayaan adalah yang takut kepada Allah."' },
        { author: 'Abu Bakar', quote: '"Setiap segala sesuatu itu ada kelebihannya. Maka janganlah suka meremehkan dan merendahkan."' },
        { author: 'Abu Bakar', quote: '"Tingkah laku yang baik adalah ketika seseorang tidak membutuhkan imbalan sebagai ganti atas perbuatan baik."' },
        { author: 'Umar bin Khattab', quote: '"Cara terbaik untuk mengalahkan seseorang adalah mengalahkannya dengan kesopanan."' },
        { author: 'Umar bin Khattab', quote: '"Mahkota seseorang adalah akalnya. Derajat seseorang adalah agamanya. Sedangkan kehormatan seseorang adalah budi pekertinya."' },
        { author: 'Umar bin Khattab', quote: '"Aku tidak pernah sekalipun menyesali diamku. Tetapi aku berkali-kali menyesali bicaraku."' },
        { author: 'Umar bin Khattab', quote: '"Berpegang teguhlah pada kebenaran, bahkan meski kebenaran itu akan membunuhmu."' },
        { author: 'Umar bin Khattab', quote: '"Orang yang paling aku sukai adalah orang yang mau menunjukkan kesalahanku."' },
        { author: 'Umar bin Khattab', quote: '"Jangan berlebihan dalam mencintai sehingga menjadi keterikatan, jangan pula berlebihan dalam membenci sehingga membawa kebinasaan."' },
        { author: 'Umar bin Khattab', quote: '"Barangsiapa menempatkan dirinya di tempat yang dapat menimbulkan persangkaan, maka janganlah menyesal kalau orang berprasangka buruk kepadanya."' },
        { author: 'Umar bin Khattab', quote: '"Sabar adalah bahan ramuan paling menyehatkan dalam hidup kita."' },
        { author: 'Umar bin Khattab', quote: '"Jangan tertipu oleh orang yang membaca Alquran. Tapi lihatlah kepada mereka yang perilakunya sesuai dengan Alquran itu."' },
        { author: 'Umar bin Khattab', quote: '"Bila engkau menemukan cela pada seseorang dan engkau hendak mencacinya, maka cacilah dirimu, karena celamu lebih banyak darinya."' },
        { author: 'Umar bin Khattab', quote: '"Tidak ada rasa bersalah yang dapat mengubah masa lalu dan tidak ada kekhawatiran yang dapat mengubah masa depan."' },
        { author: 'Umar bin Khattab', quote: '"Menjauhi dosa itu lebih ringan daripada menanggung rasa sakit dari sebuah penyesalan."' },
        { author: 'Umar bin Khattab', quote: '"Lidah akan terus berkata jujur selagi hatinya ikhlas dan luhur."' },
        { author: 'Umar bin Khattab', quote: '"Jadilah orang yang bermartabat, jujur dan selalu menyampaikan kebenaran."' },
        { author: 'Umar bin Khattab', quote: '"Terkadang, orang dengan masa lalu paling kelam akan menciptakan masa depan yang paling cerah."' },
        { author: 'Umar bin Khattab', quote: '"Suatu pengetahuan (ilmu), kalaupun tidak bermanfaat untukmu, tidak akan membahayakanmu."' },
        { author: 'Umar bin Khattab', quote: '"Barangsiapa yang jernih hatinya, akan diperbaiki pula oleh Allah pada apa yang nyata di wajahnya."' },
        { author: 'Umar bin Khattab', quote: '"Jangan bersedih atas apa yang telah berlalu, kecuali kalau itu bisa membuatmu bekerja lebih keras untuk apa yang akan datang."' },
        { author: 'Umar bin Khattab', quote: '"Apa yang melewatkanku tidak akan pernah menjadi takdirku, dan apa yang ditakdirkan untukku tidak akan pernah melewatkanku."' },
        { author: 'Umar bin Khattab', quote: '"Biasakan diri dengan hidup susah, karena kesenangan tidak akan kekal selamanya."' },
        { author: 'Umar bin Khattab', quote: '"Tidak ada jalinan hubungan antara Allah dengan siapapun kecuali melalui ketaatan kepada-Nya."' },
        { author: 'Umar bin Khattab', quote: '"Kebajikan yang ringan adalah menunjukkan muka berseri-seri dan mengucapkan kata-kata lemah lembut."' },
        { author: 'Umar bin Khattab', quote: '"Ketahuilah sabar itu ada dua. Yang satu lebih utama daripada yang lain. Sabar pada waktu musibah itu baik. Yang lebih baik daripadanya lagi ialah sabar (menahan diri) dari yang diharamkan Allah."' },
        { author: 'Umar bin Khattab', quote: ' "Aku tidak peduli atas keadaan susah dan senangku, karena aku tidak tahu manakah di antara keduanya itu yang lebih baik bagiku."' },
        { author: 'Umar bin Khattab', quote: '"Duduklah bersama orang-orang yang mencintai Allah, karena bergaul bersama orang seperti mereka akan mencerahkan pikiran."' },
        { author: 'Utsman Bin Affan', quote: '"Di antara pendosa, yang paling buruk adalah dia yang meluangkan waktunya untuk membahas kesalahan orang lain."' },
        { author: 'Utsman Bin Affan', quote: '"Buatlah tujuan untuk hidup, kemudian gunakan segenap kekuatan untuk mencapainya, kamu pasti berhasil."' },
        { author: 'Utsman Bin Affan', quote: '"Derajat keimanan yang paling tinggi adalah bahwa kamu selalu merasa berada di hadapan Allah."' },
        { author: 'Utsman Bin Affan', quote: '"Tamak penyakit bagi orang yang tidak mampu kendalikan dirinya."' },
        { author: 'Utsman Bin Affan', quote: '"Tidak seorang pun yang menyembunyikan suatu rahasia di dalam hatinya, kecuali Allah akan menampakkan pada raut wajahnya atau melalui perkataan yang terlontar dari lidahnya."' },
        { author: 'Utsman Bin Affan', quote: '"Tidak ada yang mampu mengurusi persoalan umat Islam, kecuali orang yang memiliki integritas hikmah, matang, dan berpengalaman."' },
        { author: 'Utsman Bin Affan', quote: ' "Andai hati kalian bersih, maka kalian tidak akan pernah merasa kenyang (bosan) dari membaca Alquran."' },
        { author: 'Utsman Bin Affan', quote: '"Risau terhadap dunia adalah kegelapan bagi hati, sedangkan risau terhadap akhirat adalah cahaya bagi hati."' },
        { author: 'Utsman Bin Affan', quote: '"Cukuplah bagimu bahwa orang yang iri terhadapmu merasa tertekan pada saat senangmu."' },
        { author: 'Utsman Bin Affan', quote: '"Pengetahuan lebih baik daripada kekayaan, pengetahuan akan melindungimu, sedangkan kekayaan harus kamu lindungi."' },
        { author: 'Utsman Bin Affan', quote: '"Diamnya orang yang diam lebih bahaya dari perlakuan serangan orang lain."' },
        { author: 'Utsman Bin Affan', quote: '"Tergelincirnya lidah itu lebih berhaya daripada tergelincirnya kaki."' },
        { author: 'Utsman Bin Affan', quote: '"Kalian lebih butuh pada pemimpin yang aktif ketimbang pemimpin yang sering mengumbar kata-kata."' },
        { author: 'Utsman Bin Affan', quote: '"Tidaklah seseorang menyembunyikan sesuatu melainkan Allah akan menampakkannya melalui raut mukanya dan ketergelinciran mulutnya."' },
        { author: 'Utsman Bin Affan', quote: '"Aku merasa cukup dengan pandanganku sebagaimana aku merasa cukup dengan ingatanku."' },
        { author: 'Utsman Bin Affan', quote: '"Aku lebih senang di pandang Allah SWT sebagai hamba yang berbuat baik dari pada sebagai orang yang berbuat kerusakan."' },
        { author: 'Utsman Bin Affan', quote: '"Ketika lidah seseorang menjadi tenang dan ramah, maka hatinya menjadi saleh dan bersih."' },
        { author: 'Utsman Bin Affan', quote: '"Hindarilah dari minuman keras, karena itu dari kunci kejahatan."' },
        { author: 'Utsman Bin Affan', quote: '"Sambutlah ajal kalian dengan amal baik yang kalian mampu."' },
        { author: 'Utsman Bin Affan', quote: '"Tidak ada yang mampu mengurusi permasalahan umat islam kecuali orang yang memiliki integritas hikmah, matang, dan berpengalaman."' },
        { author: 'Utsman Bin Affan', quote: '"Ambillah hikmah dan pelajaran dari kisah orang-orang terdahulu."' },
        { author: 'Utsman Bin Affan', quote: '"Ketika kaum Muslimin terpecah belah, keimanan mereka akan goyah dan akan kehilangan kekuatan persatuan di antara mereka."' },
        { author: 'Utsman Bin Affan', quote: '"Segala sesuatu itu akan binasa. Dan binasanya ilmu adalah lupa pada ilmu itu."' },
        { author: 'Utsman Bin Affan', quote: '"Sesungguhnya ALLAH SWT menciptakan makhluk dengan hak (benar), maka janganlah berbicara kecuali atas kebenaran."' },
        { author: 'Utsman Bin Affan', quote: '"Setiap orang diberi masalah sesuai dengan kemampuannya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Memaafkan adalah kemenangan terbaik."' },
        { author: 'Ali bin Abi Thalib', quote: '"Seseorang yang putus asa melihat kesulitan dalam setiap kesempatan, tetapi orang yang optimis melihat peluang dalam setiap kesulitan."' },
        { author: 'Ali bin Abi Thalib', quote: '"Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka mendengarnya jika orang lain mengucapkannya kepadamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Barang siapa menyalakan api fitnah, maka dia sendiri yang akan menjadi bahan bakarnya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Kenali kebenaran, maka kamu akan tahu orang-orang yang benar. Benar Tidak diukur oleh orang-orangnya, tetapi manusia diukur oleh kebenaran."' },
        { author: 'Ali bin Abi Thalib', quote: '"Jangan membenci siapapun, tidak peduli berapa banyak mereka bersalah padamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Bila kau cemas dan gelisah akan sesuatu, masuklah ke dalamnya sebab ketakutan menghadapinya lebih menganggu daripada sesuatu yang kau takuti sendiri."' },
        { author: 'Ali bin Abi Thalib', quote: '"Tetaplah berhubungan dengan orang-orang yang telah melupakanmu, dan ampuni yang bersalah padamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Tetaplah berhubungan dengan orang-orang yang telah melupakanmu, dan ampuni yang bersalah padamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Barang siapa menyalakan api fitnah, maka dia sendiri yang akan menjadi bahan bakarnya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Kenali kebenaran, maka kamu akan tahu orang-orang yang benar. Benar Tidak diukur oleh orang-orangnya, tetapi manusia diukur oleh kebenaran."' },
        { author: 'Ali bin Abi Thalib', quote: '"Jangan membenci siapapun, tidak peduli berapa banyak mereka bersalah padamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Bila kau cemas dan gelisah akan sesuatu, masuklah ke dalamnya sebab ketakutan menghadapinya lebih menganggu daripada sesuatu yang kau takuti sendiri."' },
        { author: 'Ali bin Abi Thalib', quote: '"Tetaplah berhubungan dengan orang-orang yang telah melupakanmu, dan ampuni yang bersalah padamu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Pergunjingan adalah puncak kemampuan orang-orang yang lemah."' },
        { author: 'Ali bin Abi Thalib', quote: '"Kesucian hati nurani seseorang sesuai dengan kadar kepekaannya terhadap kehormatan dirinya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Aku sudah pernah merasakan semua kepahitan dalam hidup dan yang paling pahit ialah berharap kepada manusia."' },
        { author: 'Ali bin Abi Thalib', quote: '"Berbahagialah orang yang dapat menjadi tuan bagi dirinya, menjadi pemandu untuk nafsunya, dan menjadi kapten untuk bahtera hidupnya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Menjaga air muka adalah hiasan bagi orang miskin, sebagaimana syukur adalah hiasan bagi orang kaya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Pekerjaan tangan yang paling sederhana sekalipun demi mempertahankan harga diri seseorang, jauh lebih utama daripada kekayaan yang disertai penyelewengan."' },
        { author: 'Ali bin Abi Thalib', quote: '"Kemarahan dimulai dengan kegilaan dan berakhir dengan penyesalan."' },
        { author: 'Ali bin Abi Thalib', quote: '"Sebagian obat justru menjadi penyebab datangnya penyakit, sebagaimana sesuatu yang menyakitkan adakalanya menjadi obat penyembuh."' },
        { author: 'Ali bin Abi Thalib', quote: '"Sebagian obat justru menjadi penyebab datangnya penyakit, sebagaimana sesuatu yang menyakitkan adakalanya menjadi obat penyembuh."' },
        { author: 'Ali bin Abi Thalib', quote: '"Jangan sekali-kali merasa malu memberi walaupun sedikit, sebab tidak memberi sama sekali pasti lebih sedikit nilainya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Adakalanya yang sedikit lebih berkah daripada yang banyak."' },
        { author: 'Ali bin Abi Thalib', quote: '"Berikanlah banyak, meskipun menerima sedikit."' },
        { author: 'Ali bin Abi Thalib', quote: '"Tidak ada gunanya seorang penolong yang selalu menghina atau teman yang selalu berburuk sangka."' },
        { author: 'Ali bin Abi Thalib', quote: '"Sisihkan gelombang-gelombang kerisauan dengan kekuatan kesabaran dan keyakinan."' },
        { author: 'Ali bin Abi Thalib', quote: '"Hiduplah dengan rendah hati, tidak peduli seberapa kekayaanmu."' },
        { author: 'Ali bin Abi Thalib', quote: '"Jadilah seperti bunga yang memberikan keharumannya bahkan pada tangan yang menghancurkannya."' },
        { author: 'Ali bin Abi Thalib', quote: '"Angin tidak berhembus untuk menggoyangkan pepohonan, melainkan menguji kekuatan akarnya."' },
    ];
    res.json(data);
});

// Jalankan server
app.listen(3000, () => {
<<<<<<< HEAD
    console.log('Server is running on port 3000');
});
=======
  console.log('Server is running on port 3000');
});
>>>>>>> 6efa4c3047b1848d8e2674c23e4e15dbf8d6773b
