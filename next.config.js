/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "firebasestorage.googleapis.com",
            "www.apple.com" // Eğer resmin olduğu domain bu ise, bu şekilde domaini ekleyebilirsiniz.
        ]
    }
}

module.exports = nextConfig;
