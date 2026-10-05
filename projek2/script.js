
const $ = id => document.getElementById(id);

const mainBtn = $("mainBtn");
const menu = $("menu");
const dialog = $("dialog");
const dialogName = $("dialogName");
const dialogText = $("dialogText");
const dialogBackground = $("dialogBackground");
const dialogCharacter = $("dialogCharacter");
const dialogBox = document.querySelector(".dialog-box");
const reloadBtn = $("reloadBtn");


const backgroundMusic = new Audio("assets/backsound.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2;

const dialogSound = new Audio("assets/dialog.mp3");
dialogSound.loop = true;

const scenes = [
    {
        background: "assets/background-sekolah.png",
        dialogs: [
            ["Aku", "Pagi ini sangat cerah ya"],
            ["Aku", "Aku harap hari ini akan menjadi hari yang menyenangkan"],
            ["Aku", "Tapi kok ada yang aneh, aku merasa ada sesuatu yang berbeda hari ini"],
            ["Aku", "Ah, sudahlah. Aku harus segera masuk ke kelas"]
        ]
    },
    {
        background: "assets/background-kelas.png",
        dialogs: [
            ["Aku", "*Berlari ke kelas"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        dialogs: [
            ["Guru", "Anak-anak, silahkan kembali ketempat duduk kalian"],
            ["Guru", "Disini kita kedatangan murid baru"],
            ["Aku", "Murid baru? Siapa ya?"],
            ["Aku", "Aku harap dia tidak akan mengganggu kelas"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek1.png",
        dialogs: [
            ["Kachi", "Salam kenal teman teman, namaku Kachi"],
            ["Kachi", "Aku murid baru disini"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek2.png",
        dialogs: [
            ["Kachi", "Aku harap kita bisa menjadi teman baik"],
            ["Aku", "*Woilah dia cantik juga ya, bukan kan ini my kisah"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        dialogs: [
            ["Guru", "Baiklah Kachi, silahkan duduk di tempat yang kosong"],
            ["....", "*Kachi duduk di tempat kosong, tepat di sebelahku"],
            ["Guru", "Anak-anak, sekarang kita akan memulai pelajaran hari ini"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek3.png",
        dialogs: [
            ["Kachi", "Aduh, bukuku tertinggal di rumah, gimana ini..."],
            ["....", "*Kamu melihat Kachi yang sedang kebingungan, lalu aku menawarkan bantuan"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek3.png",
        dialogs: [
            ["Aku", "Hmmm, anu..."],
            ["Aku", "Mau berbagi buku?, kebetulan aku bawa buku pelajarannya"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek2.png",
        dialogs: [
            ["Kachi", "Eh, Serius? Makasih ya"],
            ["Aku", "Iya, sama-sama..."]
        ]
    },
    {
        background: "assets/cutscene1.png",
        dialogs: [
            ["....", "Kalian berdua belajar bersama, dan cerita tantang diri kalian masing-masing"],
            ["....", "Kalian berdua mengetahui bahwa kalian memiliki banyak kesamaan"],
            ["....", "Tidak terasa waktu berlalu begitu cepat, dan pelajaran pun selesai"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        character: "assets/Cewek2.png",
        dialogs: [
            ["Kachi", "terima kasih ya sudah membantuku hari ini"],
            ["Kachi", "Oh iya, nanti jam 3 kamu datangin ruang osis ya?"],
            ["Aku", "Iya, aku akan datang"],
            ["....", "*Kachi pun pergi meniggalkan kelas"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        dialogs: [
            ["Aku", "*perasaanku berdebar, aku tidak menyangka Kachi akan mengajakku ke ruang osis"],
            ["Aku", "*Aku harus menyiapkan diri, aku tidak boleh mengecewakannya"]
        ]
    },
    {
        background: "assets/transisi1.jpg",
        dialogs: [
            ["....", "Kamu mengikuti pelajaran di kelas dengan baik"],
            ["....", "Kamu masi aja memkirkan Kachi, dan tidak sabar untuk bertemu dengannya"]
        ]
    },
    {
        background: "assets/transisi2.jpg",
        dialogs: [
            ["....", "Waktu pun berlalu, dan akhirnya jam 3 pun tiba"],
            ["....", "Kamu pun bergegas menuju ruang osis, dan bertemu dengan Kachi"]
        ]
    },
    {
        background: "assets/background-dalam.png",
        dialogs: [
            ["Aku", "Akhirnya selesai juga pelajaran hari ini"],
            ["Aku", "Aku harus segera ke ruang osis, aku tidak boleh terlambat"]
        ]
    },
    {
        background: "assets/transisi3.jpg",
        dialogs: [
            ["Aku", "*aku bergegas menuju ruang osis"],
            ["Aku", "*aku tidak sabar untuk bertemu Kachi"]
        ]
    },
    {
        background: "assets/osis1.png",
        dialogs: [
            ["Aku", "akhirnya sampai juga di ruang osis"],
            ["Aku", "Kachi!"]
        ]
    },
    {
        background: "assets/osis1.png",
        character: "assets/Cewek1.png",
        dialogs: [
            ["Kachi", "selamat datang, aku senang kamu beneran datang"],
            ["Kachi", "aku mau ngajak kamu untuk ngerjain pr bareng"]
        ]
    },
    {
        background: "assets/osis1.png",
        character: "assets/Cewek2.png",
        dialogs: [
            ["Kachi", "Di sini kita bisa belajar dengan tenang, tanpa gangguan"],
            ["Aku", "Iyaaa, di sini memang nyaman banget, aku bisa fokus belajar"]
        ]
    },
    {
        background: "assets/transisi3.jpg",
        dialogs: [
            ["....", "Kamu menikmati belajar bareng dengan Kachi"],
            ["....", "Tanpa sadar langit mulai berwarna orange"]
        ]
    },
    {
        background: "assets/transisi4.jpg",
        dialogs: [
            ["....", "Jam menunjukan pukul 17.00"],
            ["....", "dan mulai satu persatu meninggalkan sekolah"]
        ]
    },
    {
        background: "assets/osis2.png",
        character: "assets/cewek1.png",
        dialogs: [
            ["Kachi", "waah tidak terasa ya, sudah sore..."],
            ["Aku", "Iya nih"],
            ["Kachi", "Oh iya sebelum pulang, aku mau kasi kamu kejutan"]
        ]
    },
    {
        background: "assets/osis2.png",
        character: "assets/cewek2.png",
        dialogs: [
            ["Kachi", "Ayok ikutin aku...."],
            ["Aku", "eh emang mau kemana, EH TUNGGU SEBENTAR....."]
        ]
    },
    {
        background: "assets/osis2.png",
        dialogs: [
            ["....", "kamu pun di tarik Kachi ke suatu tempat"]
        ]
    },
    {
        background: "assets/ending.png",
        dialogs: [
            ["Kachi", "nih tempat nya...."],
            ["Kachi", "gimana bagus gk?"],
            ["Aku", "Waah bagus banget, aku baru tau kita bisa liat matahari dari atas sekolah"],
            ["Kachi", "shuutt..., tolong ini rahasia kita berdua..."]
        ]
    },
    {
        background: "assets/akhir.png",
        dialogs: []
    }
];

let scene = 0;
let line = 0;
let typing = false;
let timer;
let text = "";

const typingSpeed = 40;

function typeText(value) {
    clearInterval(timer);
    dialogSound.pause();
    dialogSound.currentTime = 0;

    text = value;
    dialogText.textContent = "";
    let i = 0;
    typing = true;

    dialogSound.play().catch(() => {});

    timer = setInterval(() => {
        dialogText.textContent += text[i++];

        if (i >= text.length) {
            clearInterval(timer);
            typing = false;
            dialogSound.pause();
            dialogSound.currentTime = 0;
        }
    }, typingSpeed);
}

function startScene(index) {
    scene = index;
    line = 0;
    reloadBtn.style.display = "none";

    const current = scenes[scene];
    dialogBackground.src = current.background;

    if (current.character) {
        dialogCharacter.src = current.character;
        dialogCharacter.style.display = "block";
    } else {
        dialogCharacter.style.display = "none";
    }

    if (current.dialogs.length) {
        dialogBox.style.display = "block";
        showDialog();
    } else {
        dialogBox.style.display = "none";
        reloadBtn.style.display = "block";
    }
}

function showDialog() {
    const [name, text] = scenes[scene].dialogs[line];
    dialogName.textContent = name;
    typeText(text);
}

function finishText() {
    clearInterval(timer);
    dialogText.textContent = text;
    typing = false;
    dialogSound.pause();
    dialogSound.currentTime = 0;
}

mainBtn.onclick = () => {
    menu.style.display = "none";
    dialog.style.display = "block";
    backgroundMusic.play().catch(() => {});
    startScene(0);
};

dialog.onclick = () => {
    if (typing) {
        finishText();
        return;
    }

    line++;

    if (line < scenes[scene].dialogs.length) {
        showDialog();
    } else if (++scene < scenes.length) {
        startScene(scene);
    } else {
        dialogSound.pause();
        backgroundMusic.pause();
        reloadBtn.style.display = "block";
    }
};


reloadBtn.onclick = () => {
    location.reload();
};

