
export const MASKAPAI = {
    GRD:{
        maskapai_id: "GRD",
        maskapai_nama: "Garuda Indonesia",
        maskapai_logo: "../images/garuda.jpg", 
    },
    SJW:{
        maskapai_id: "SJW",
        maskapai_nama: "Sriwijaya Air",
        maskapai_logo: "../images/Sriwijaya_air.png", 
    },
    BTK:{
        maskapai_id: "BTK",
        maskapai_nama: "Batik Air",
        maskapai_logo: "../images/batik.png", 
    },
    PLA:{
        maskapai_id: "PLA",
        maskapai_nama: "Pelita Air",
        maskapai_logo: "../images/pelita_air.png",
    },
    AJT:{
        maskapai_id: "AJT",
        maskapai_nama: "Super Air Jet",
        maskapai_logo: "../images/airjet.png",
    },
    CTL:{
        maskapai_id: "CTL",
        maskapai_nama: "Citilink",
        maskapai_logo: "../images/citilink.png",
    },
};

export const BANDARA = {
    CKG:{
        bandara_kode: "CGK",
        bandara_nama: "Soekarno Hatta",
    },
    TKG:{
        bandara_kode: "TKG",
        bandara_nama: "Radin Inten II",
    },
    KNO:{
        bandara_kode: "KNO",
        bandara_nama: "Kualanamu",
    },
    DPS:{
        bandara_kode: "DPS",
        bandara_nama: "Gusti Ngurah Rai",
    },
    WARR:{
        bandara_kode: "WARR",
        bandara_nama: "Juanda",
    },
    MLG:{
        bandara_kode: "MLG",
        bandara_nama: "Abdul Rachman Saleh",
    },
};

export const JADWAL = [
    {
        jadwal_id: "1",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "2",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "DPS",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "3",
        bandara_kode_keberangkatan: "TKG",
        bandara_kode_tujuan: "DPS",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "4",
        bandara_kode_keberangkatan: "DPS",
        bandara_kode_tujuan: "CKG",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "5",
        bandara_kode_keberangkatan: "WARR",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "CTL"
    },
    {
        jadwal_id: "6",
        bandara_kode_keberangkatan: "WARR",
        bandara_kode_tujuan: "KNO",
        maskapai_id: "AJT"
    },
    {
        jadwal_id: "7",
        bandara_kode_keberangkatan: "MLG",
        bandara_kode_tujuan: "KNO",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "8",
        bandara_kode_keberangkatan: "DPS",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "GRD"
    },
    {
        jadwal_id: "9",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "KNO",
        maskapai_id: "PLA"
    },
    {
        jadwal_id: "10",
        bandara_kode_keberangkatan: "TKG",
        bandara_kode_tujuan: "MLG",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "11",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "SJW"
    },
    {
        jadwal_id: "12",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "BTK"
    },
    {
        jadwal_id: "13",
        bandara_kode_keberangkatan: "CKG",
        bandara_kode_tujuan: "TKG",
        maskapai_id: "CTL"
    },
];