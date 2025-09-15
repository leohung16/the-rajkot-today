import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - The Rajkot Today",
  description: "Privacy Policy for The Rajkot Today news website",
};

export default function PrivacyPage() {
  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            The Rajkot Today ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p className="mb-4">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our contact form</li>
            <li>Participate in surveys or promotions</li>
            <li>Comment on articles</li>
          </ul>
          <p className="mb-4">
            This information may include your name, email address, phone number, and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
          <p className="mb-4">
            We automatically collect certain information when you visit our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and location data</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Device information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you emails and newsletters</li>
            <li>Find and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="mb-4">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party services for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google Analytics:</strong> To analyze website traffic and usage</li>
            <li><strong>Google AdSense:</strong> To display advertisements</li>
            <li><strong>Social Media Platforms:</strong> For social media integration</li>
            <li><strong>Email Services:</strong> To send newsletters and communications</li>
          </ul>
          <p className="mb-4">
            These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          <p className="mb-4">
            While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <p className="mb-4">
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate personal information</li>
            <li>The right to delete your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal information</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p><strong>Email:</strong> support@allzyapp.in</p>
            <p><strong>Phone:</strong> +91 7265010921</p>
            <p><strong>Address:</strong> University Marg, Rajkot 360005, Gujarat, India</p>
            <p><strong>Website:</strong> <a href="https://therajkottoday.allzyapp.in" className="text-blue-600 hover:underline">therajkottoday.allzyapp.in</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
