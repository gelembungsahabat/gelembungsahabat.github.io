<script lang="ts">
    import Card from "./card.svelte";
</script>

<section class="section mt-6">
    <h2 class="title is-size-1 is-size-3-mobile has-text-centered">
        Kumpulan Konten Menarik
    </h2>

    <div class="columns mt-6 is-centered">
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/imagethres.png"
                altImage="Image Thresholding with OpenCV Python3"
                href="https://medium.com/@gelembungsahabat/deteksi-warna-dengan-metode-image-thresholding-opencv-python-3-f3686de4308"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Image Thresholding with OpenCV Python3
                </h1>
                <p class="is-size-6">
                    Pengenalan dasar image thresholding beserta source codenya
                </p>
            </Card>
        </div>
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/reactjs.png"
                altImage="Pengenalan ReactJS"
                href="https://medium.com/@gelembungsahabat/pengenalan-reactjs-40ffa31ae9c7"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Pengenalan ReactJS
                </h1>
                <p class="is-size-6">
                    Pengenalan salah satu framework JS paling populer yaitu
                    ReactJS
                </p>
            </Card>
        </div>
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/persiapanreact.png"
                altImage="Persiapan Membuat Web dengan ReactJS"
                href="https://medium.com/@gelembungsahabat/persiapan-membuat-website-dengan-reactjs-435ccac65c54"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Persiapan Membuat Web dengan ReactJS
                </h1>
                <p class="is-size-6">
                    Materi tentang setup project ReactJS beserta penjelasannya
                </p>
            </Card>
        </div>
    </div>

    <div class="columns mt-6 is-centered">
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/staticwebreact1.png"
                altImage="Belajar Membuat Static Site Menggunakan ReactJS #part1"
                href="https://medium.com/@gelembungsahabat/belajar-membuat-static-site-menggunakan-reactjs-part1-4bb9a3a02307"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Belajar Membuat Static Site Menggunakan ReactJS #part1
                </h1>
                <p class="is-size-6">
                    Belajar membuat skeleton atau kerangka dari project web dan
                    belajar mengenai `Components`
                </p>
            </Card>
        </div>
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/git.png"
                altImage="Dasar VCS (Version Control System)"
                href="https://medium.com/@gelembungsahabat/dasar-vcs-version-control-system-789b6793bcb9"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Dasar VCS (Version Control System)
                </h1>
                <p class="is-size-6">
                    ini pengetahuan dasar tentang cara pengoperasian VCS. VCS
                    Bukan singkatan dari Video Call S*x ya, tapi Version Control
                    System. Dalam hal ini mengarah ke Git
                </p>
            </Card>
        </div>
        <div class="column is-3 mx-3 my-3">
            <Card
                image="./images/pyqt5.jpg"
                altImage="Raspibot with PyQt5"
                href="https://github.com/gelembungsahabat/raspibot-pyqt5"
            >
                <h1 class="title is-size-4 is-size-4-mobile">
                    Raspibot with PyQt5
                </h1>
                <p class="is-size-6">
                    Membuat Raspibot dengan menggunakan Desktop App PyQt5
                </p>
            </Card>
        </div>
    </div>
</section>
