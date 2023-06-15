"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          title: ">Diet Tinggi Protein",
          content: `                <p>Protein merupakan zat yang sangat penting yang dibutuhkan oleh tubuh. Zat gizi ini terdapat di hampir seluruh jaringan tubuh dan menjadi zat pembangun tubuh. Berbagai peran penting yang dilakukan protein dalam tubuh di antaranya adalah untuk menunjang pertumbuhan, pembentukan sistem kekebalan tubuh, hormon, enzim, dan berbagai jaringan tubuh lain. Berbagai prinsip diet banyak yang menganjurkan untuk mengonsumsi protein yang tinggi dan mengurangi karbohidrat. Selain itu, protein dianggap dapat menahan rasa lapar lebih lama. </p>

          <h2>Tujuan Diet Tinggi Protein</h2>
          <p>Terdapat dua jenis tipe diet tinggi protein, yaitu diet yang disertai dengan pembatasan karbohidrat dan digantikan dengan protein, dan diet yang menggantikan seluruh kebutuhan karbohidrat dengan protein. Diet tinggi protein biasanya menghabiskan 25 hingga 35 persen dari total kalori dalam sehari. Sedangkan yang tubuh kita butuhkan hanya sekitar 10 sampai 15 persen protein dari total kalori sehari. Menurut ketentuan Kementerian Kesehatan tentang angka kecukupan gizi, kebutuhan protein normal yang harus dipenuhi setiap harinya adalah sebesar 62 hingga 65 gram untuk laki-laki dan 56 hingga 57 untuk perempuan usia dewasa, atau sebanyak 0,8-1,0 gram per kg berat badan per hari.</p>
          <h2>Manfaat Diet Tinggi Protein</h2>
          <p>Tahukah kamu bahwa otak, tepatnya area yang disebut hipotalamus, berperan besar dalam mengatur berat badan kamu. Organ vital tersebut memproses berbagai jenis informasi untuk menentukan kapan kamu harus makan dan seberapa banyak jumlah makanan yang perlu kamu makan untuk merasa kenyang. Beberapa sinyal penting yang dikirim ke otak adalah perubahan hormon sebagai respons untuk mengonsumsi makanan.

          Nah, meningkatkan asupan protein dapat meningkatkan kadar hormon kenyang (pengurang napsu makan) GLP-1, peptidpeptiden kadar kolesistokinin, sekaligus mengurangi kadar hormon lapar, yaitu ghrelin. Berkurangnya rasa lapar membuat kamu makan lebih sedikit kalori secara otomatis. Hal ini yang membuat diet tinggi protein dapat mengurangi berat badan.</p>   
          `,
          author: "Laila Nur Fardah",
          image: "https://i.ibb.co/554df2K/diet3.jpg",
          menu_diet: `<div className="row">
              
          <div className="col-sm-4">
            <p>Hari Pertama</p>
            <ul className="circle">
              <li>Pagi: Omelet dengan 3putih telur dan 1 kuning telur + 1 potong sayuran bayam + 1 roti gandum panggang + segelas susu rendah lemak </li>
              <li>Siang: 150gr ayam panggang tanpa kulit + 1 porsi salad sayuran segar dengan 2 sendok dressing rendah lemak + air putih atau teh herbal tanpa gula </li>
              <li>Malam:  150gr ikan panggang + 1/2 cangkir nasi merah + sayuran panggang </li>
            </ul>
            <p>Hari Kedua</p>
            <ul className="circle">
              <li>Pagi: Shake protein dengan 1 scoop whey protein + 1 pisang + 1 cangkir bayam segar + 1 cangkir susu almond </li>
              <li>Siang: tofu panggang dengan rempah dan sedikit minyak zaitun + 1 porsi brokoli kukus + 1/2 cangkir beras merah </li>
              <li>Malam: 150gr dada ayam panggang + 1/2 cangkir quinoa + sayuran hijau (bayam atau asparagus) </li>
            </ul>
            <p>Hari Ketiga</p>
            <ul className="circle">
              <li>Pagi: Oatmeal + 1/2 cangkir bububuk protein + potongan buah buah (pisang atau stroberi) + 1 sendok makan almond cincang </li>
              <li>Siang: salad dada ayam panggang dengan sayuran hijau(selada, bayam dan daun bawang) + dressing rendah lemak(lemon dan balsamic) </li>
              <li>Malam: 150gr salmon panggang dan rempah + 1/2 cangkir kentang manis panggang + sayuran panggang(asparagus atau paprika) </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <p>Hari Keempat</p>
            <ul className="circle">
              <li>Pagi: 3 putih telur rebus dengan potongan bayam dan tomat + 1 iris roti gandum panggang </li>
              <li>Siang: salad tuna + 1/2 alpukat + selada + tomat + dressing rendah lemak + air putih atau teh herbal tanpa gula</li>
              <li>Malam: 150gr daging sapi panggang + 1/2 cangkir kacang hijau + 1/2 cangkir nasi merah</li>
            </ul>
            <p>Hari Kelima</p>
            <ul className="circle">
              <li>Pagi: Shake protein dengan 1 cangkir yoghurt yunani rendah lemak + 1/2 cangkir blueberry beku + 1 sendok makan selai kacang</li>
              <li>Siang: ayam panggang dengan rempah + 1/2 cangkir quinoa + sayuran kukus(brokoli atau wortel)</li>
              <li>Malam: tofu goreng dengan rempah dan sedikit minyak zaitun + 1/2 cangkir nasi cokelat + sajikan dengan tumis sayuran(paprika atau buncis)</li>
            </ul>
          </div>
          <div className="col-sm-4">
            <p>Hari Keenam</p>
            <ul className="circle">
              <li>Pagi: pancake protein dengan 3 putih telur + 1/2 pisang + 1 sendok makan madu</li>
              <li>Siang: salad salmon dengan sayuran hijay(selada atau bayam) + dressing rendah lemak seperti lemon atau balsamic</li>
              <li>Malam: 150gr udang panggang dengan rempah + 1 porsi sobda(mie gandum) dan wortel panggang</li>
            </ul>
            <p>Hari Ketujuh</p>
            <ul className="circle">
              <li>Pagi: sandwich telur rebu dengan 2 lembar roti gandum + porongan sayur (selada, tomat atau mentimun) + 1/4 alpukat</li>
              <li>Siang: sup ayam dengan potongan ayam, sayurang segar dan kacang merah</li>
              <li>Malam: 150gr dada ayam panggang dengan rempah + 1/2 cangkir kentang panggang + 1 porsi brokoli kukus</li>
              <p><strong>Note: Ulangi jika berat badan ingin terus menurun</strong></p>
            </ul>
          </div>
        </div>`,
          published: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("aricles", null, {});
  },
};
