import localFont from "next/font/local";

const geistSans = localFont({
    src: "./GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const poppins = localFont(
    {
        src: "./Poppins-Regular.ttf",
        variable: "--font-poppins",
        weight: "100 900",
    }
)

export { geistSans, geistMono, poppins };