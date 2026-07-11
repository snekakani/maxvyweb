import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Download, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import FollowUsCard from '../../../components/common/FollowUsCard';
import { getArticleBySlug, getRelatedArticles } from '../../../data/knowledgeArticles';
import aboutBanner from '../../../images/about-us_banner.jpeg';

// --- Knowledge Card Component (Reused from landing page) ---
const KnowledgeCard = ({ title, description, onReadMore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-6 flex flex-col h-full transition-all duration-300 cursor-pointer"
      onClick={onReadMore}
    >
      <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      <button className="group mt-4 inline-flex h-10 min-w-[100px] items-center justify-center gap-2 rounded-lg bg-[#FF6B00] text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#f25f00] hover:shadow-lg px-3">
        <span>Read more</span>
        <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

const KnowledgeArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  
  // Handle download for article 25 and 26
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (article?.isDownload && article?.downloadUrl) {
      const link = document.createElement('a');
      link.href = article.downloadUrl;
      link.download = article.downloadUrl.split('/').pop() || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle link click for device names
  const handleDeviceLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0F172A]">Article not found</h2>
          <Link to="/about/knowledge-sharing" className="text-orange-500 hover:underline mt-4 inline-block">
            Back to Knowledge Sharing
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  // Custom components for ReactMarkdown
  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-[26px] font-bold text-[#FF6B00] mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#0F172A] mt-8 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-[#0F172A] mt-4 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-[15px] text-gray-700 leading-[1.9] mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-3 mb-6 pl-0">
        {children}
      </ul>
    ),
    li: ({ children }) => {
      return (
        <li className="text-[18px] text-gray-700 leading-[1.9] flex items-start gap-3 pl-0">
          <span className="text-[#FF6B00] text-xl font-bold mt-0.5">•</span>
          <span className="flex-1">{children}</span>
        </li>
      );
    },
    ol: ({ children }) => (
      <ol className="space-y-3 mb-6 pl-0 list-decimal list-inside">
        {children}
      </ol>
    ),
    img: ({ src, alt }) => (
      <div className="my-10 flex justify-center">
        <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-[800px] w-auto">
          <img 
            src={src} 
            alt={alt || 'Article image'} 
            className="w-full h-auto"
          />
        </div>
      </div>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[#0F172A]">
        {children}
      </strong>
    ),
    table: ({ children }) => {
      const tableClass = 'min-w-full border-collapse border-2 border-[#FF6B00] rounded-lg overflow-hidden';
      return (
        <div className="overflow-x-auto mb-6">
          <table className={tableClass}>
            {children}
          </table>
        </div>
      );
    },
    thead: ({ children }) => {
      return (
        <thead className="bg-[#FF6B00]">
          {children}
        </thead>
      );
    },
    th: ({ children }) => {
      return (
        <th className="border border-[#FF6B00] px-4 py-3 text-left text-sm font-semibold text-white">
          {children}
        </th>
      );
    },
    td: ({ children }) => {
      return (
        <td className="border border-[#FF6B00] px-4 py-3 text-sm text-gray-700">
          {children}
        </td>
      );
    },
    tr: ({ children }) => {
      const childrenArray = React.Children.toArray(children);
      const isHeaderRow = childrenArray.some((child: any) => {
        return child?.type === 'th' || 
               child?.props?.className?.includes('th') ||
               (child?.props?.children && 
                Array.isArray(child?.props?.children) && 
                child.props.children.some((c: any) => c?.type === 'th'));
      });
      
      if (isHeaderRow) {
        return <tr className="bg-[#FF6B00] hover:bg-[#FF6B00] transition-none">{children}</tr>;
      }
      
      return (
        <tr className="hover:bg-orange-50 transition-colors even:bg-orange-50/50">
          {children}
        </tr>
      );
    },
  };

  // Check if this is the MIPI I3C supported devices article
  const isSupportedDevicesArticle = article.slug === 'mipi_i3c_supported_devices';

  // Helper function to render list items with clickable device names
  const renderListItem = (text: string) => {
    // Split the text to handle complex cases
    if (text.includes('DRA829JM, DRA829VM & DRA821U/ DRA821A')) {
      return (
        <span className="text-gray-700">
          TEXAS INSTRUMENTS –{' '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, '/images/dra829v.pdf')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            DRA829JM, DRA829VM
          </button>
          {' & '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.ti.com.cn/cn/lit/ds/sprsp57a/sprsp57a.pdf?ts=1610348001384&ref_url=https%253A%252F%252Fwww.google.com%252F')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            DRA821U/ DRA821A
          </button>
        </span>
      );
    }

    if (text.includes('BMI263, LSM6DSOX, ICM42605, ICM 42688')) {
      return (
        <span className="text-gray-700">
          IMU SENSORS –{' '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.bosch-sensortec.com/en/products/motion-sensors/imus/bmi263.html')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            BMI263
          </button>
          {', '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.st.com/en/mems-and-sensors/lsm6dsox.html')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            LSM6DSOX
          </button>
          {', '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.invensense.tdk.com/en-us/products/inertial-sensors/icm-42605')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            ICM42605
          </button>
          {', '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.invensense.tdk.com/en-us/download-pdf/icm-42688-p-product-brief')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            ICM 42688
          </button>
        </span>
      );
    }

    if (text.includes('ICE40 Ultra Plus Family, MachX03D, ECP5-5G FPGA')) {
      return (
        <span className="text-gray-700">
          LATTICE SEMICONDUCTOR – ICE40 Ultra Plus Family,{' '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.latticesemi.com/Products/FPGAandCPLD/MachXO3D')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            MachX03D
          </button>
          {', '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.latticesemi.com/products/developmentboardsandkits/ecp5evaluationboard')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            ECP5-5G FPGA
          </button>
        </span>
      );
    }

    // Check if it's a Renesas IMX item
    if (text.includes('RENESAS – IMX3112 (1:2), IMX3102 (2:1)')) {
      return (
        <span className="text-gray-700">
          RENESAS –{' '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.renesas.com/en/products/imx3112')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            IMX3112 (1:2)
          </button>
          {', '}
          <button
            onClick={(e) => handleDeviceLinkClick(e, 'https://www.renesas.com/en/products/imx3102')}
            className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
          >
            IMX3102 (2:1)
          </button>
        </span>
      );
    }

    // Check if it's a specific device with link
    const linkMappings = {
      'Qualcomm – SM8150': '#',
      'NXP – MX RT500 & MX RT600': '/images/IMXRT500RT600FS.pdf',
      'ASPEED – AST2600': 'https://www.aspeedtech.com/server_ast2600/',
      'HISILICON – HIKEY970 (I3C Provision pins)': '/images/hikey970-schematics.pdf',
      'MEDIATEK – MT8385': '#',
      'NXP - LPC557x/8x Family': 'https://community.nxp.com/t5/Technology-Days-Training/LPC5500-MCU-Series-Station-F/ta-p/1129565?profile.language=en',
      'PRESSURE SENSOR – LPS22HH': '/images/lps22hh.pdf',
      'WATER PROOF PRESSURE SENSOR - LPS27HHW': '/images/lps27hhw.pdf',
      'TEMPERATURE SENSOR – TS5111': 'https://www.renesas.com/en/products/ts5111',
      'MAGNETIC SENSOR – MMC5633NJL': '#',
      'EEPROM – SPD5118': 'https://www.renesas.com/en/products/spd5118',
      'RENESAS – IXP31x4': 'https://www.mouser.in/new/renesas/renesas-ixp31-gpio-expanders/',
      'DIODES - PI3CSW12 I3C 1:2 Multiplexer': 'https://www.mouser.in/new/diodes-inc/diodes-pi3csw12-i3c-multiplexer/',
      'GOWIN SEMICONDUCTORS CORP – GW1N-9 device': 'https://www.eetasia.com/GOWIN_Semiconductor_Announces_MIPI_I3C/',
      'INTROSPECT TECHNOLOGY – SV4E-I3C': 'https://introspect.ca/product/sv4e-i3c/',
      'KEYSIGHT TECHNOLOGIES - N8843A I3C PROTOCOL TRIGGERING AND DECODE FOR INFINIIUM SERIES OSCILLOSCOPE': 'https://www.keysight.com/us/en/product/N8843A/i3c-protocol-triggering-decode-infiniium-series-oscilloscope.html',
      'PRODIGY – I3C PROTOCOL ANALYZER': 'https://www.prodigytechno.com/product/i3c-protocol-analyzer-and-exerciser/',
      'TEKTRONIX – 4SERIES Mixed Signal Oscilloscope': '/images/2816281.pdf',
      'SPEKTRA – S-TEST': 'https://www.spektra-dresden.com/en/news-details/spektra-s-test-supports-test-of-sensors-with-new-i3c-interface-190'
    };

    // Check if the text has a link mapping
    const linkUrl = linkMappings[text];
    if (linkUrl && linkUrl !== '#') {
      return (
        <button
          onClick={(e) => handleDeviceLinkClick(e, linkUrl)}
          className="text-[#FF6B00] hover:text-[#f25f00] underline decoration-2 underline-offset-2 hover:decoration-[#FF6B00] transition-colors cursor-pointer font-medium"
        >
          {text}
        </button>
      );
    }

    return <span className="text-gray-700">{text}</span>;
  };

  return (
    <section className="bg-[#FAFAFA] min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${aboutBanner})`,
            height: '300px',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-[30px] font-extrabold leading-tight tracking-tight text-[#0F172A]">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* --- FLOATING WHITE CONTAINER --- */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[70px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 lg:p-12"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/about/company-overview" className="hover:text-orange-500 transition-colors">About</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/about/knowledge-sharing" className="hover:text-orange-500 transition-colors">Knowledge Sharing</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#0F172A] font-medium truncate">{article.title}</span>
            </nav>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
              {/* --- LEFT CONTENT - Article --- */}
              <div>
                <div className="article-content">
                  {article.isDownload ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="bg-orange-50 rounded-full p-6 mb-6">
                        <Download className="w-16 h-16 text-[#FF6B00]" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0F172A] mb-4">{article.title}</h2>
                      <p className="text-gray-600 text-center max-w-md mb-8">{article.shortDescription}</p>
                      <button
                        onClick={handleDownload}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B00] text-white rounded-lg hover:bg-[#f25f00] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-6 h-6" />
                        Download PDF
                      </button>
                    </div>
                  ) : isSupportedDevicesArticle ? (
                    // Special rendering for Supported Devices article with card layout
                    <div>
                      <h1 className="text-[26px] font-bold text-[#FF6B00] mb-8 leading-tight">
                        MIPI I3C - SUPPORTED DEVICES
                      </h1>
                      
                      {/* MCUs & MPU's Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">MCUs & MPU's</h2>
                            <ul className="space-y-2 pl-0">
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('Qualcomm – SM8150')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('NXP – MX RT500 & MX RT600')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('ASPEED – AST2600')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('TEXAS INSTRUMENTS – DRA829JM, DRA829VM & DRA821U/ DRA821A')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('HISILICON – HIKEY970 (I3C Provision pins)')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('MEDIATEK – MT8385')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('NXP - LPC557x/8x Family')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-44 lg:w-52">
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                              <img 
                                src="/images/qualcomm_snapdragon.jpg" 
                                alt="MCUs & MPU's" 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SENSOR DEVICES Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">SENSOR DEVICES</h2>
                            <ul className="space-y-2 pl-0">
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('PRESSURE SENSOR – LPS22HH')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('WATER PROOF PRESSURE SENSOR - LPS27HHW')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('IMU SENSORS – BMI263, LSM6DSOX, ICM42605, ICM 42688')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('TEMPERATURE SENSOR – TS5111')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('MAGNETIC SENSOR – MMC5633NJL')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('EEPROM – SPD5118')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-44 lg:w-52">
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                              <img 
                                src="/images/lsm6dsox.png" 
                                alt="Sensor Devices" 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* MULTIPLEXER & EXPANDER DEVICES Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">MULTIPLEXER & EXPANDER DEVICES</h2>
                            <ul className="space-y-2 pl-0">
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('RENESAS – IMX3112 (1:2), IMX3102 (2:1)')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('RENESAS – IXP31x4')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('DIODES - PI3CSW12 I3C 1:2 Multiplexer')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-44 lg:w-52">
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                              <img 
                                src="/images/multiplexer.jpg" 
                                alt="Multiplexer Devices" 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* FPGA BOARDS Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">FPGA BOARDS</h2>
                            <ul className="space-y-2 pl-0">
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('LATTICE SEMICONDUCTOR – ICE40 Ultra Plus Family, MachX03D, ECP5-5G FPGA')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('GOWIN SEMICONDUCTORS CORP – GW1N-9 device')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-44 lg:w-52">
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                              <img 
                                src="/images/latticeFPGA.jpg" 
                                alt="FPGA Boards" 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TEST DEBUGGERS AND ANALYZER DEVICES Card */}
                      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="flex-1">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">TEST DEBUGGERS AND ANALYZER DEVICES</h2>
                            <ul className="space-y-2 pl-0">
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('INTROSPECT TECHNOLOGY – SV4E-I3C')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('KEYSIGHT TECHNOLOGIES - N8843A I3C PROTOCOL TRIGGERING AND DECODE FOR INFINIIUM SERIES OSCILLOSCOPE')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('PRODIGY – I3C PROTOCOL ANALYZER')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('TEKTRONIX – 4SERIES Mixed Signal Oscilloscope')}</span>
                              </li>
                              <li className="text-[15px] text-gray-700 leading-[1.7] flex items-start gap-2 pl-0">
                                <span className="text-[#FF6B00] text-lg font-bold mt-0.5">•</span>
                                <span className="flex-1">{renderListItem('SPEKTRA – S-TEST')}</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-44 lg:w-52">
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                              <img 
                                src="/images/i3cDebugger.jpg" 
                                alt="Test Debuggers" 
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={markdownComponents}
                    >
                      {article.content}
                    </ReactMarkdown>
                  )}
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {relatedArticles.map((related) => (
                        <Link 
                          key={related.id} 
                          to={`/about/knowledge-sharing/${related.slug}`}
                          className="block"
                        >
                          <KnowledgeCard
                            title={related.title}
                            description={related.shortDescription}
                            onReadMore={() => {}}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* --- RIGHT SIDEBAR --- */}
              <div className="lg:pl-4">
                <FollowUsCard
                  title="Follow us"
                  companyName="Maxvy Tech"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                  buttonText="Follow"
                  facebookImage="/path-to-facebook-preview-image.jpg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-12" />
      </div>
    </section>
  );
};

export default KnowledgeArticle;