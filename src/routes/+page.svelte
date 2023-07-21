<script lang="ts">
    import { onMount } from "svelte";

    import moment from "moment";

    interface Comic {
        month: string;
        num: number;
        link: string;
        year: string;
        news: string;
        safe_title: string;
        transcript: string;
        alt: string;
        img: string;
        title: string;
        day: string;
    }

    export let comic: Comic;

    const submitForm = async (event: Event) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        if (!form) return;
        const input = document.getElementById(
            "email-input"
        ) as HTMLInputElement;
        const email = input.value;
        const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(
            email
        )}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        const comicApiUrl = `https://fwd.innopolis.university/api/comic?id=${data}`;
        const comicResponse = await fetch(comicApiUrl);
        const comicData = await comicResponse.json();

        comic = comicData;
    };
</script>

<svelte:head>
    <nav>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fory's website</title>
        <link rel="stylesheet" href="styles.css" />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
    </nav>
</svelte:head>
<header>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#comic-generation">Comic</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<section id="hero">
    <div class="hero-content">
        <h1>Welcome to My Website</h1>
        <img src="pics/my-photo.png" width="400" height="500" alt="my-photo" />
        <p>My name is Eugene Spiridonov and I'm beginning web developer.</p>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2>About Me</h2>
        <p>
            I'm an Innopolis University student who is creating his first
            website.
        </p>
    </div>
</section>

<section id="projects">
    <div class="container">
        <h2>Projects</h2>
        <p>Well, this is my first project =)</p>
    </div>
</section>

<section id="comic-generation">
    <div class="container">
        <h2>Submit email to get comic!</h2>
        <form id="email-form" on:submit={submitForm}>
            <input
                type="email"
                id="email-input"
                placeholder="Enter your email"
                required
            />
            <button type="submit">Generate Comic</button>
        </form>
    </div>
</section>

<section id="comic-section" style="display: {comic ? 'block' : 'none'}">
    <div class="container">
        <h2>Comic</h2>
        {#if comic}
            <div class="comic-container">
                <img src={comic.img} alt={comic.alt} width="300" height="400" />
                <h3>{comic.safe_title}</h3>
                <p>
                    {moment(
                        `${comic.year}-${comic.month}-${comic.day}`
                    ).fromNow()}
                </p>
            </div>
        {:else}
            <p>Loading comic...</p>
        {/if}
    </div>
</section>

<section id="contact" style="text-align: center;">
    <div class="container">
        <h2>Contact me!</h2>
        <div class="social-icons">
            <a href="https://twitter.com/forygg" target="_blank"
                ><i class="fab fa-twitter" /></a
            >
            <a href="https://github.com/forygg" target="_blank"
                ><i class="fab fa-github" /></a
            >
            <a href="https://www.instagram.com/fory_gg/" target="_blank"
                ><i class="fab fa-instagram" /></a
            >
        </div>
    </div>
</section>

<style>
    * {
        font-family: "Roboto Mono", monospace;
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.6;
    }

    header {
        background-color: #59116d;
        color: #fff;
        padding: 20px;
    }

    nav ul {
        background-color: #59116d;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav ul li {
        margin-left: auto;
        margin-right: auto;
    }

    nav ul li a {
        color: #fce63e;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-size: x-large;
    }

    nav h1 {
        color: purple;
    }

    section {
        padding: 40px 0;
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .hero-content {
        text-align: center;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 20px;
        font-family: "Orbitron", sans-serif;
    }

    p {
        font-size: 18px;
    }

    .project {
        margin-bottom: 20px;
    }

    form input,
    form textarea,
    form button {
        display: block;
        margin-bottom: 10px;
    }

    form input,
    form textarea {
        width: 100%;
        padding: 10px;
    }

    form button {
        background-color: #59116d;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    .social-icons {
        text-align: center;
        margin-top: 20px;
    }

    .social-icons a {
        display: inline-block;
        margin-right: 10px;
        color: #333;
        font-size: 24px;
        transition: color 0.3s ease;
    }

    .social-icons a:hover {
        color: #666;
    }

    #comic-generation form {
        display: flex;
    }

    #comic-generation input[type="email"] {
        flex: 1;
        margin-right: auto;
    }

    #comic-section .comic-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>
