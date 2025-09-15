import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - The Rajkot Today",
  description: "Terms and Conditions for The Rajkot Today news website",
};

export default function TermsPage() {
  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using The Rajkot Today website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials on The Rajkot Today's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Content Accuracy</h2>
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, The Rajkot Today makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
          </p>
          <p className="mb-4">
            Any reliance you place on such information is therefore strictly at your own risk. We reserve the right to correct any errors or omissions and to change or update information at any time without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
          <p className="mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity</li>
            <li>Upload, post, or transmit any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights</li>
            <li>Upload, post, or transmit any unsolicited or unauthorized advertising, promotional materials, spam, or any other form of solicitation</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p className="mb-4">
            The content on this website, including but not limited to text, graphics, logos, images, audio clips, video, and software, is the property of The Rajkot Today or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>
          <p className="mb-4">
            You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
          <p className="mb-4">
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, The Rajkot Today:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Excludes all representations and warranties relating to this website and its contents</li>
            <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall The Rajkot Today or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Rajkot Today's website, even if The Rajkot Today or a The Rajkot Today authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Revisions</h2>
          <p className="mb-4">
            The materials appearing on The Rajkot Today's website could include technical, typographical, or photographic errors. The Rajkot Today does not warrant that any of the materials on its website are accurate, complete, or current. The Rajkot Today may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <p><strong>Email:</strong> support@allzyapp.in</p>
            <p><strong>Phone:</strong> +91 7265010921</p>
            <p><strong>Address:</strong> University Marg, Rajkot 360005, Gujarat, India</p>
          </div>
        </section>
      </div>
    </div>
  );
}
