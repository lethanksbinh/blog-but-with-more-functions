import Link from "next/link";

export default function Home() {
  return (
    <main className="page-content" aria-label="Content">
      <div className="w">
        <h1>Thanksbinh</h1>

        <ul>
          <li>me</li>
          <li style={{ listStyleType: "none" }}>
            <ul>
              <li><Link href="mailto:lethanhbinh6203@gmail.com">email</Link></li>
              <li><Link href="https://github.com/lethanksbinh">github</Link></li>
              <li>keep in touch: <Link href="/newsletter.html">newsletter</Link></li>
            </ul>
          </li>

          <li>posts</li>
          <li style={{ listStyleType: "none" }}>
            <ul>
              <li>
                2023-05-25 <Link href="/my-jlpt-n2-challenge.html">my experience of getting JLPT N2 in ... months</Link>
              </li>
              <li>
                2023-05-24 <Link href="/intro.html">what this blog is</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  )
}
