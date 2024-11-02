import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import logo from '../../static/img/logo.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      <div className="container">
        <img src={logo} />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>开始阅读</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageDocs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero ')}>
      <div className="container">
        <h2><Translate>关于网站</Translate></h2>
        <hr />
        <h4><Translate>欢迎来到 HDocs</Translate></h4>
        <p><Translate>HDocs 是一个专注于程序代码和开发知识的网站，致力于为程序员提供一个全面的学习平台。无论你是刚刚入门的新手程序员，还是希望提升技能的经验丰富的开发者，这里都有你需要的资源。</Translate></p>

        <p><Translate>我的平台覆盖了多种编程语言，包括但不限于 Java、Python、C#、JavaScript、Laravel 等，确保你可以在学习过程中找到适合自己的编程语言。此外，HDocs 还提供了针对不同语言的面试题和练习题，帮助你在求职过程中更好地准备技术面试，提高自己的竞争力。</Translate></p>

        <p><Translate>我深知编程学习的道路并非一帆风顺，因此 HDocs 设立了一个持续更新的文档系统，确保你获得最新的技术信息和最佳实践。我的内容不仅包括基础知识，还有丰富的项目示例和深入的技术分析，让你在实际操作中积累经验。</Translate></p>

        <p><Translate>在 HDocs，你可以找到大量的教程、代码示例和详细的解释，帮助你深入理解复杂的概念。无论你想学习新技术，还是想巩固已有的知识，我都有相应的资料和课程供你选择。我的目标是为每一位热爱编程的用户提供高质量的学习体验，助力你的编程旅程。</Translate></p>

        <p><Translate>如果你觉得 HDocs 的内容对你有所帮助，我诚挚地邀请你在Github为我点个 Star，以示支持。这将激励我不断改进和更新内容，为更多程序员提供有价值的学习资源。请记住，你的支持对我至关重要！</Translate></p>


        <p><Translate>感谢你访问 HDocs，我期待与你一起成长，共同探索编程的无限可能！</Translate><a href="https://github.com/facebook/docusaurus" target="_blank">Github</a>
          <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module">
            <path fill="#808080" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
          </svg>
        </p>
      </div>
    </header>
  );
}

function HomepageAuthor() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero ')}>
      <div className="container">
        <h2><Translate>关于作者</Translate></h2>

        <hr />
        <ul>
          <li><a href="#"><Translate>高考后马上工作，因为不想读大学</Translate></a></li>
        </ul>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageDocs />
      <HomepageAuthor />
    </Layout>
  );
}
