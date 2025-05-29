import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

export const APrivacyPolicy = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "Home", hasDropdown: false, link: "/" },
    { label: "Features", hasDropdown: false },
    { label: "Reviews", hasDropdown: false },
    { label: "Download", hasDropdown: false },
  ];

  return (
    <main className="flex flex-col min-h-screen items-start px-12 py-0 relative bg-[#06020d] overflow-hidden">
      {/* No header here - using the global header */}

      {/* Main Content */}
      <section className="flex items-start px-0 py-12 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <div className="flex flex-col items-start relative flex-1 grow">
          {/* Banner */}
          <div className="relative self-stretch w-full h-60 z-[1] bg-[#06020d]">
            <div className="relative max-w-[1080px] mx-auto h-48 top-6 rounded-[22px] overflow-hidden border border-solid border-transparent [background:url(https://c.animaapp.com/mb7so03q3rPM4S/img/a-secure-home-with-a-closed-door-surrounded-by-a-tranquil-garden.png)_50%_50%_/_cover]">
              <div className="flex flex-col w-full items-start justify-end gap-3 p-6 relative top-14 [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-5xl tracking-[-0.48px] leading-[52px]">
                  Privacy Policy
                </h1>
                <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-xl tracking-[0] leading-6">
                  Last Updated: May 31, 2024
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <Card className="flex flex-col h-auto min-h-[calc(100vh-300px)] items-start gap-2 p-5 relative max-w-[1080px] mx-auto w-full z-0 bg-[#bfa1ff26] rounded-[22px] overflow-hidden border-none mt-0">
            <CardContent className="p-0 w-full h-full overflow-auto pr-4">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#dcd7e4] text-[17px] tracking-[0] leading-[1.5]">
                <p className="mb-4">Welcome to Talk Now!</p>
                <p className="mb-4">
                  Talk Now (the "Platform") is provided and controlled by AtlasV Global Pte. Ltd. ("We" or "Us"). We are committed to protecting and respecting your privacy. This Privacy Policy (the "Policy") sets out the basis on which any information we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our practices regarding your information and how we will handle it. By accessing or using the Platform, services, applications, products, and content (collectively, the "Services"), you acknowledge the practices described in the Policy. For purposes of the Policy, "you" and "your" means you as the user of the Services.
                </p>
                <p className="mb-4">
                  Before you use or submit any information through or in connection with our Services, please carefully review this Privacy Policy. By using any part of our Services, you understand that your information will be collected, used, and disclosed as outlined in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Services.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">SUMMARY</p>
                <p className="mb-2 font-bold">- What information do we collect about you?</p>
                <p className="mb-4">
                  We collect and process information about you if you use the Platform and interact with the Services and related content such as our web pages. This includes your mobile phone number(if you provide), technical and behavioral information(including text content) about your use of the Services.
                  <br /><br />
                  To comply with legal and regulatory requirements, we may ask for your name, physical address, and identity card. However, it is not mandatory to provide this information. If you choose not to provide it, we will implement the highest level of precaution to prevent scams and other illegal activities. However, if you want to use the service without strong limitations and agree to provide this information, we will collect and verify the necessary information to ensure compliance with legal requirements.
                </p>
                
                <p className="mb-2 font-bold">- How will we use the information about you?</p>
                <p className="mb-4">
                  We utilize the information to enhance, maintain and deliver our Services. Additionally, we may employ this data to ensure your safety, adhering to legal and regulatory obligations.
                </p>
                
                <p className="mb-2 font-bold">- Who do we share your information with?</p>
                <p className="mb-4">
                  We may share your information with third-party service providers who help us to deliver the Platform, or with any member of our group to improve the Platform or for internal business purposes. Where and when required by law, we will share your information with law enforcement agencies or regulators, and with third parties pursuant to a legally binding court order.
                </p>
                
                <p className="mb-2 font-bold">- Why do we keep hold of your information?</p>
                <p className="mb-4">
                  We keep your information for the duration necessary to provide you with services and fulfill our contractual obligations and rights related to the collected information. If the information is not required for providing services, we retain it only as long as there is a legitimate business purpose or a legal obligation to do so. Additionally, we will retain your information if we deem it necessary for establishing, exercising, or defending legal claims.
                </p>
                
                <p className="mb-2 font-bold">- How will we notify you of any changes to the Policy?</p>
                <p className="mb-4">
                  We will use commercially reasonable efforts to generally notify all users of any material changes to the Policy through a notice on the Platform. However, you should look at the Policy regularly to check for any changes. We will also update the "Last Updated" date at the top of the Policy, which reflects the effective date of such policy. Your continued access to or use of the Services after the date of the updated Policy constitutes your consent to the updated Policy. If you do not consent to the updated Policy, you must stop accessing or using the Services.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">1. The types of information we collect</p>
                <p className="mb-4">
                  Information you choose to provide. When you register or otherwise interact with the Services, you may give us information and content. We may also collect your feedback about the Services if you choose to provide it. Information we collect automatically. We may collect the following information about you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Personal Information.</strong> In order to comply with the law in different jurisdictions, local law enforcement asks us to collect some information that can identify you in some particular situations. You can choose not to provide but you will be implemented the highest level of precaution to prevent scams and other illegal activities. Therefore, if you want to use the service without strong limitations and agree to provide this information, we will collect and verify the necessary information, such as ID Card, Driver License, Passport, Phone Number, Physical address, to ensure compliance with legal requirements.
                  </li>
                  <li>
                    <strong>Technical information.</strong> We automatically collect certain information from you when you access or use the Services, including IP address, network type and connections, mobile or device model, device manufacturer, mobile phone area, application version number, operating system, information about operations and behaviors performed on the device, CPU and GPU information, device resolution, system language and region, and information regarding your use of the Platform.
                  </li>
                  <li>
                    <strong>Behavioral information.</strong> We also collect information regarding your use of the Services, e.g., phone calling acts. Information we obtain from other sources. We may receive information about you from other sources, including through third-party services or providers. For example, if you access third-party services through the Services or share information about your experience on the Services with others, we may collect information from these third-party services.
                  </li>
                  <li>
                    <strong>Cookies.</strong> Cookies are small files which, when placed on your device, enable us to collect certain information, including personal data, from you in order to provide certain features and functionality. We and our service providers and business partners use Cookies to collect data and recognize you and your device(s) on the Platform and elsewhere across your different devices. We do this to measure the traffic and functionality of our website.
                  </li>
                </ul>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">2. How we use your information</p>
                <p className="mb-4">We will use the information in the following ways:</p>
                <p className="mb-2">We may use your information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>provide you with the Services;</li>
                  <li>notify you about changes to the Services;</li>
                  <li>provide you with user support;</li>
                  <li>enforce our terms, conditions, and policies;</li>
                  <li>communicate with you.</li>
                </ul>
                
                <p className="mb-2">As it is in our legitimate interests to be responsive to you and to ensure the proper functioning of our products and organization, we may use your information to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>improve the Platform and to ensure tools on the Platform are presented in the most effective manner for you and your device(s);</li>
                  <li>administer the Platform and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>
                  <li>allow you to participate in interactive features of the Platform when you choose to do so;</li>
                  <li>keep the Platform safe and secure;</li>
                  <li>develop our Platform and conduct product development;</li>
                  <li>prevent fraud and spam and enforce the law.</li>
                </ul>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">3. How we share your information</p>
                <p className="mb-4">
                  We don't sell any of your information and we impose restrictions on how partners can use the data we provide. We may disclose the categories of personal information discussed above for a business purpose to selected third parties in or outside your country, including with:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>our service providers, suppliers, and subcontractors who help us run the Platform;</li>
                  <li>data analytics, crash analytics, and search engine providers that assist us in the improvement and optimization of the Platform.</li>
                </ul>
                
                <p className="mb-4">
                  We may share your information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries, or companies that we control, are controlled or under common control, and our service providers and strategic business partners, in each case in or outside your country, for the purposes set out above, as permitted by applicable law, to assist in the improvement and optimization of the Platform, or for our internal business purposes.
                </p>
                
                <p className="mb-4">
                  We may share your information with law enforcement agencies, public authorities, or other organizations if legally required to do so, or if we have a good faith belief that such use is reasonably necessary to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>comply with a legal obligation, process, or request;</li>
                  <li>enforce our Terms of Use and other agreements, policies, and standards, including investigation of any potential violation thereof;</li>
                  <li>detect, prevent, or otherwise address security, fraud, or technical issues; or</li>
                  <li>protect the rights, property, or safety of us, our users, a third party, or the public as required or permitted by law (including exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction);</li>
                </ul>
                
                <p className="mb-4">We may also disclose your information to third parties:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>in the event that we sell or buy any business or assets in which case we may disclose your information to the prospective seller or buyer of such business or assets; or</li>
                  <li>if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or all of our assets. In such transactions, user information may be among the transferred assets.</li>
                </ul>
                
                <p className="mb-4">
                  In this case, we will ensure that the terms of the Policy are observed and will inform you in advance if the transfer implies any change to these terms. Finally, we may share information otherwise with your consent or at your direction.
                </p>
                
                <p className="mb-4">
                  Please note that no mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All of the categories mentioned exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties parties.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">4. Third-party content</p>
                <p className="mb-4">
                  The Services may contain links to content maintained by third parties who we do not control. We are not responsible for the privacy practices of these third parties, and the information practices of these third parties are not covered by the Policy.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">5. Where we store your information</p>
                <p className="mb-4">
                  The information that we collect from you may be transferred to and stored at, a destination inside or outside of your country, for the purposes as described in the Policy. By submitting your information, you agree to this transfer, storing, or processing. We will take reasonable steps to secure your information and treat it in accordance with the Policy.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">6. Your choices</p>
                <p className="mb-4">
                  We provide tools in settings that allow you to control how you use the Platform. If you have any questions on how to use or want to know about any rights you may have in the country where you live, please contact us.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">7. The security of your information</p>
                <p className="mb-4">
                  We will take reasonable steps to secure your information and treat it in accordance with the Policy. Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your information, we cannot guarantee the security of your information transmitted through the Platform. We have put in place technical and organizational measures that we will amend and update from time to time to improve the overall security of our systems.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">8. Data retention</p>
                <p className="mb-4">
                  We will delete your information upon request. Otherwise, we will use the following criteria to determine the period for which we will keep your information:
                  Our contractual obligations and rights in relation to the information involved; legal obligations under applicable laws and regulations to retain data for a certain period of time; statute of limitations under applicable laws; our legitimate business purposes; and disputes or potential disputes. After you have terminated your use of our Services, we may store your information in an aggregated and anonymized format. Notwithstanding the foregoing, we may also retain any personal information as reasonably necessary to comply with our legal obligations, allow us to resolve and litigate disputes, and enforce our agreements.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">9. Information relating to children</p>
                <p className="mb-4">
                  Our services are not intended for users under the age of 13, or the minimum age required by applicable data protection laws in your jurisdiction. If you are under the specified age, you are not allowed use our Platform. If we become aware that personal information has been collected from a person under the relevant age, we will delete the user's information in accordance with applicable law. If you believe that we may have information about or collected from a child under the relevant age, please contact us.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">10. Complaints</p>
                <p className="mb-4">
                  In the event that you wish to make a complaint about how we process your personal information, please contact us in the first instance at DPO@atlasv.com and we will endeavor to deal with your request as soon as possible. This is without prejudice to your right to launch a claim with your information protection authority or follow the dispute process.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">11. Changes</p>
                <p className="mb-4">
                  We will use commercially reasonable efforts to generally notify all users of any material changes to the Policy, such as through a notice on our Platform, however, you should look at the Policy regularly to check for such changes. We will also update the "Last Updated" date at the top of the Policy, which reflects the effective date of such policy. Your continued access to or use of the Services after the date of the updated Policy constitutes your consent to the updated Policy. If you do not consent to the updated Policy, you must stop accessing or using the Services.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">12. Contact</p>
                <p className="mb-4">
                  Questions, comments, and requests regarding the Policy are welcomed and should be addressed to:
                </p>
                <ul className="list-none pl-6 mb-4 space-y-1">
                  <li><strong>Legal Entity:</strong> AtlasV Global Pte. Ltd.</li>
                  <li><strong>Legal Email:</strong> <a href="mailto:legal@atlasv.com" className="text-[#8244ff] hover:underline">legal@atlasv.com</a></li>
                  <li><strong>Support Email:</strong> <a href="mailto:support_talknow@atlasv.com" className="text-[#8244ff] hover:underline">support_talknow@atlasv.com</a></li>
                  <li><strong>Report Abuse Email:</strong> <a href="mailto:support_talknow@atlasv.com" className="text-[#8244ff] hover:underline">support_talknow@atlasv.com</a></li>
                </ul>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">SUPPLEMENTAL TERMS – Twilio API</p>
                <p className="mb-4">
                  Twilio is a phone numbers management and communication service provided by Twilio Inc.
                  Twilio Inc. processes all personal data submitted by you exclusively on the basis of the General Data Protection Regulation, and will be transferred with SSL/TLS- encrypted and only use them to perform requested video or photo processing.
                </p>
                <p className="mb-2">Place of processing:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>United States – Privacy Policy;</li>
                </ul>
                <p className="mb-4">
                  For more information on the privacy practices of Twilio, please visit the Twilio Privacy Policy web page: <a href="https://www.twilio.com/en-us/legal/privacy" className="text-[#8244ff] hover:underline">https://www.twilio.com/en-us/legal/privacy</a>.
                </p>
                <p className="mb-4">
                  We engage Twilio Inc. that acts as a data processor on our behalf in order to be able to provide you with messaging services within the App. Sending messages (SMS, MMS, Chat) using our App and Vonage's platform can be possible only when all applicable policies, regulations and laws are properly observed. Therefore, while sending messages using the phone numbers and other services available within the App you agree to be bound by and comply with the following requirements:
                </p>
                <p className="mb-4">
                  It is strictly prohibited to use the App for sending messages with the content that is illegal, harmful, unwanted, inappropriate, objectionable, confirmed to be criminal misinformation, or otherwise poses threat to the public, or that violates any law and/or regulation in the country where the message recipient lives (e.g. messages related to cannabis, offers for prescription medication that cannot legally be sold over-the-counter, messages containing hate speech, malicious content, etc.). It is also prohibited to send messages related to high-risk financial services, third-party lead generation services (companies that buy, sell, or share consumer information), "get rich quick" schemes, debt collection or forgiveness, gambling, as well as messages containing "S.H.A.F.T." (sex, hate, alcohol, firearms, tobacco) use cases. The specified list of prohibited content is not exhaustive, messages containing these categories of content cannot be sent via the App regardless of the fact whether or not you get consent from message recipients for such content. You undertake to comply with all requirements contained in the specified documents while using the App.
                </p>
                <p className="mb-4">
                  When you use the App to send messages, you also agree to take into account and comply with the requirements regarding the recipient's consent to receive messages from you (including possible forms, scenarios of obtaining such consent), opt-out mechanisms, as well as with sender identification requirements.
                </p>
                <p className="mb-4">
                  Content verification for US/Canadian destination numbers. Please note that all content of messages that you send and/or transmit via the App to United States and Canadian numbers is subject to monitoring and verification process by Twilio Inc. particularly, Twilio proactively identifies and does not accept the messages in violation of the Twilio Terms of Service and Twilio Messaging Policy. The messages that are proactively identified as messages in violation of Twilio Terms of Service and Twilio Messaging Policy will be returned as an error prior to reaching carrier networks. Moreover, in the event that your message(s) violates Twilio Terms of Service and Twilio Messaging Policy or other applicable regulations your access to the App and/or to messaging services available within the App may be suspended or terminated. Taking into account the foregoing, you hereby provide us and Vonage Holdings Corp. with your relevant permission for collecting, processing, storing and monitoring the content of all messages you send using the App for the purpose of detecting spam, fraudulent activity, and violations of Twilio Terms of Service and Twilio Messaging Policy.
                </p>
                <p className="mb-4">
                  Your failure to provide relevant permissions and comply with the requirements stated above means that you cannot use the messaging services available via the App.
                </p>
                <p className="mb-4">
                  This SUPPLEMENTAL TERMS – Twilio API are incorporated into the present Privacy policy and constitute its integral part. By accepting the Privacy policy containing this SUPPLEMENTAL TERMS – Twilio API you hereby express you consent and give all appropriate permissions and authorizations regarding data processing, storage and sharing, the applicable procedures for sending messages and message content monitoring, as well as other issues reflected herein.
                </p>
                
                <p className="font-bold mb-2 text-xl text-[#8244ff]">SUPPLEMENTAL TERMS – JURISDICTION SPECIFIC</p>
                <p className="mb-4">
                  In the event of a conflict between the provisions of the Supplemental Terms – Jurisdiction Specific that are relevant to your jurisdiction from which you access or use the Services, and the rest of the Policy, the relevant jurisdiction's Supplemental Terms – Jurisdiction Specific will supersede and control.
                </p>
                
                <p className="font-bold mb-2">United States</p>
                <p className="mb-4">
                  If you are using our Services in the United States, the following additional terms apply:
                </p>
                <p className="font-bold">California Privacy Rights</p>
                <p className="mb-4">
                  If you are a California resident, you may request certain information about our disclosure of personal information to third parties for their own direct marketing purposes during the preceding calendar year. This request is free and may be made once a year. Your browser may offer you a "Do Not Track" option, which allows you to signal to operators of websites and web applications and services (including behavioral advertising services) that you do not wish such operators to track certain of your online activities over time and/or across different websites. Our products do not support "Do Not Track" requests at this time, but you are able to adjust "Allow Tracking" option in the system setting.
                </p>
                <p className="mb-4">
                  Pursuant to the California Consumer Privacy Act ("CCPA"), California residents, subject to verification, may request to see what personal information we have collected about them over the past 12 months, including the categories of personal information that the business has collected about the consumer, the categories of sources for that information, the business or commercial purposes for collecting the information, the categories of third parties with which the information was shared, and the specific pieces of personal information collected about them. If you are a California resident, you may also request that we delete your personal information subject to certain exceptions. Consistent with California law, if you choose to exercise either of these rights, we will not charge you different prices or provide different qualities of services unless those differences are related to your information. Please submit your request via legal@atlasv.com.
                </p>
                <p className="mb-4">
                  We do not sell personal information to third parties for purposes of the CCPA. We may permit third parties to collect personal information through our Services and share each of the categories of personal information described above with third parties for business purposes. These business purposes are described above and include providing advertising on our products and services and elsewhere based on users' online activities over time and across different sites, services, and devices (so-called "interest-based advertising") and website and online service analytics. The information practices of these third parties are not covered by the Policy.
                </p>
                
                <p className="font-bold mb-2">Brazil</p>
                <p className="mb-4">
                  If you are using our Services in Brazil, the following additional terms apply:
                </p>
                <p className="font-bold">Exercise of data protection rights.</p>
                <p className="mb-4">
                  Brazilian law provides certain rights to individuals with regard to their personal data. Thus, we seek to ensure transparency and access controls in order to allow users to benefit from the mentioned rights.
                </p>
                <p className="mb-4">
                  We will respond and/or fulfill your requests for the exercise of your rights below, according to the applicable law and when applicable, to the Brazilian General Data Protection Law - LGPD, once it comes into force:
                </p>
                <ul className="list-[lower-alpha] pl-6 mb-4 space-y-1">
                  <li>confirmation of whether your data are being processed;</li>
                  <li>access to your data;</li>
                  <li>correction of incomplete, inaccurate, or outdated data;</li>
                  <li>anonymization, blocking, or erasure of data;</li>
                  <li>portability of personal data to a third party;</li>
                  <li>object to the processing of personal data;</li>
                  <li>information of public and private entities with which we shared data;</li>
                  <li>information about the possibility to refuse to provide personal data and the respective consequences, when applicable;</li>
                  <li>withdrawal of your consent.</li>
                </ul>
                
                <p className="font-bold">Verifying your identity.</p>
                <p className="mb-4">
                  For your safety and to allow us to make sure that we do not disclose any of your personal data to unauthorized third parties, in order to verify your identity and guarantee the adequate exercise of your rights, we may request specific information and/or documents from you before we can properly respond to a request received concerning your data. All data and documents received from you in the process of responding to your requests will be used for the strict purposes of analyzing your request, authenticating your identity, and finally responding to your request.
                </p>
                
                <p className="font-bold">Limitations to your rights.</p>
                <p className="mb-4">
                  In certain situations, we may have legitimate reasons not to comply with some of your requests. For instance, we may choose not to disclose certain information to you when disclosure could adversely impact our business whenever there is a risk of violation of our trade secrets or intellectual property rights. In addition, we may refrain from complying with a request for erasure when the maintenance of your data is required for complying with legal or regulatory obligations or when such maintenance is required to protect our rights and interests in case a dispute arises. Whenever this is the case and we are unable to comply with a request you make, we will let you know the reasons why we cannot fulfill your request. In case of doubt about your privacy, your rights, or how to exercise them, please contact us via the provided information in "12. Contact". If you have any questions about the processing of your personal data, we would like to clarify them.
                </p>
                
                <p className="font-bold">International Transfer of Data.</p>
                <p className="mb-4">
                  We share your personal data globally with companies of our business group to carry out the activities specified in this Policy. We may also subcontract the processing of data involved in the Services or share your personal data with third parties located in other countries. Your personal data may therefore be subject to privacy laws other than those applicable in your country.
                </p>
                <p className="mb-4">
                  Whenever we transfer your personal data to third parties located in other countries, we will ensure that these companies comply with applicable data protection laws and we will take all measures that are reasonably necessary to ensure the existence of adequate safeguards to protect your personal data and to ensure that are processed safely.
                </p>
                
                <p className="font-bold">Parental and Guardian Consent.</p>
                <p className="mb-4">
                  If required by Brazilian data protection laws, (i) if you are over the age of 16 but under the age of 18, you can only use and register for an account with the assistance of your parent or legal guardian and you declare and represent that you had such assistance to use the Services and to agree to the Policy; (ii) if you are over the age of 13 but under the age of 16, you can only use and register for an account with the representation of your parent or legal guardian, and you must obtain the consent from your parent or legal guardian to the use of the Services and acceptance of this Privacy Policy. Language. The Terms of Service are prepared in the English language and shall prevail in other versions (if any).
                </p>
                <p className="mb-4">
                  DPO. If you wish to contact the Data Protection Officer, please contact us: DPO@atlasv.com
                </p>
                
                <p className="font-bold mb-2">South Korea</p>
                <p className="mb-4">
                  If you are using our Services in South Korea, the following additional terms apply:
                </p>
                <p className="font-bold">Data retention.</p>
                <p className="mb-4">
                  We destroy personal data whose purpose of collection as consented to by you have been achieved, or whose periods of and use to which you consented to or which were provided in the Policy have expired; provided, however, we will continue to store your personal data for the following statutorily-prescribed periods, where applicable, including, but not limited to:
                </p>
                <p className="mb-2">Act on Consumer Protection in Electronic Commerce:</p>
                <ul className="list-[lower-alpha] pl-6 mb-4 space-y-1">
                  <li>Records on your cancellation of an order, your payment on a purchased item, and our supply of a good/service: 5 years</li>
                  <li>Records on the handling of consumer complaints or disputes: 3 years</li>
                  <li>Records on advertisements and labels: 6 months</li>
                  <li>Protection of Communications Secrets Act</li>
                  <li>Records on your visits to our website: 3 months</li>
                </ul>
                
                <p className="font-bold">Destruction of Personal data.</p>
                <p className="mb-4">
                  We destroy your personal data in a manner that renders it unrestorable by the relevant department. Your Rights
                </p>
                <p className="font-bold">Data rights.</p>
                <p className="mb-4">
                  You have the right to access personal data we hold about you, to rectify any personal data held about you that is inaccurate, to request the deletion of personal data held about you, and the right to request the suspension of the processing of your personal data. You can exercise your rights by contacting us.
                </p>
                <p className="font-bold">Data Security.</p>
                <p className="mb-4">
                  We work hard to protect our Platform and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. To this end, we have in place technical, managerial, and physical safeguards, including internal policy for data protection, limiting the access to personal data on a need-to-know basis, and controlling access to the facilities where personal data is processed.
                </p>
                <p className="font-bold">Information Relating to Children.</p>
                <p className="mb-4">
                  Talk Now is not directed at children under the age of 14.
                </p>
                <p className="font-bold">Entrustment and/or Overseas Transfer of Personal Data.</p>
                <p className="mb-4">
                  We entrust your data to our affiliates, cloud storage providers, IT service providers, and data centers, some of whom are located abroad, subject to your consents or notifications to you, if applicable. The entities receiving and processing your data are committed to using and storing personal data in compliance with domestic and international regulations and to taking all available physical and technical measures to protect personal data. You may opt-out of such transfer so long as the transfer is not necessary to provide you with the Services, by contacting DPO@atlasv.com.
                </p>
                
                <p className="font-bold mb-2">EEA and Switzerland and the UK</p>
                <p className="mb-4">
                  If you are using the Services in the EEA and Switzerland or the UK (the "European Region"), the following additional terms apply:
                </p>
                <p className="font-bold">Where we store your information</p>
                <p className="mb-4">
                  If you are a citizen of the EEA, the personal data that we collect from you will be transferred to and stored at, a destination outside of the European Economic Area ("EEA"). Where we transfer your personal data to countries outside the EEA, we do so under the Commission's model contracts for the transfer of personal data to third countries (i.e. standard contractual clauses) pursuant to 2004/915/EC or 2010/87/EU (as appropriate).
                </p>
                <p className="font-bold">How we share your information</p>
                <p className="mb-4">
                  If you consent to push notifications, we may also provide your device information to your operating system. Your rights You have the following rights:
                </p>
                <ul className="list-[lower-alpha] pl-6 mb-4 space-y-1">
                  <li>The right to request free of charge (i) confirmation of whether we process your personal data and (ii) access to a copy of the personal data retained;</li>
                  <li>The right to request proper rectification or removal of your personal data or restriction of the processing of your personal data;</li>
                  <li>Where the processing of your personal data is either based on your consent or necessary for the performance of a contract with you and processing is carried out by automated means, the right to receive the personal data concerning you in a structured, commonly used and machine-readable format or to have your personal data transmitted directly to another company, where technically feasible (data portability);</li>
                  <li>Where the processing of your personal data is based on your consent, the right to withdraw your consent at any time without impact to data processing activities that have taken place before such withdrawal;</li>
                  <li>The right not to be subject to any automatic individual decisions, including profiling, which produces legal effects on you or similarly significantly affects you unless we have your consent, this is authorised by Union or Member State law or this is necessary for the performance of a contract;</li>
                  <li>The right to object to processing if we are processing your personal data on the basis of our legitimate interest unless we can demonstrate compelling legitimate grounds which may override your right. If you object to such processing, we ask you to state the grounds of your objection in order for us to examine the processing of your personal data and to balance our legitimate interest in processing and your objection to this processing;</li>
                  <li>The right to object to processing your personal data for direct marketing purposes; and</li>
                  <li>The right to lodge complaints before the competent data protection regulator.</li>
                </ul>
                <p className="mb-4">
                  Before we can respond to a request to exercise one or more of the rights listed above, you may be required to verify your identity or your account details.
                </p>
                <p className="mb-4">
                  If you would like to exercise any of your rights, please contact us via DPO@atlasv.com.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="flex flex-col items-start gap-7 pt-24 pb-[50px] px-0 z-0 relative self-stretch w-full bg-[#06020d]">
        <img
          className="relative self-stretch w-full h-[1.5px] mt-[-0.75px] object-cover"
          alt="Decorative line"
          src="https://c.animaapp.com/mb7omhnwJF9a09/img/frame.svg"
        />

        <div className="flex items-start gap-[50px] relative self-stretch w-full max-w-[1080px] mx-auto">
          {/* Logo section */}
          <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
            <div className="inline-flex h-8 items-center gap-1 relative">
              <img
                className="relative w-[28.79px] h-[26.82px]"
                alt="TalkNow Logo"
                src="https://c.animaapp.com/mb7omhnwJF9a09/img/logo.svg"
              />
              <div className="relative w-fit font-['Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
                TalkNow
              </div>
            </div>
          </div>

          {/* Footer link sections */}
          <div className="flex flex-col w-[200px] items-start justify-center gap-2 relative">
            <div className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] leading-5 mt-[-1.00px]">
              Download
            </div>
            <a 
              href="https://apps.apple.com/us/app/talk-now-2nd-text-number-app/id6448094998"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.talknow.free.text.me.now.second.phone.number.burner.app"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
            >
              Google Play
            </a>
          </div>

          <div className="flex flex-col w-[200px] items-start justify-center gap-2 relative">
            <div className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] leading-5 mt-[-1.00px]">
              Legal Terms
            </div>
            <Link 
              to="/privacy-policy"
              className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use"
              className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="text-center text-[#d9d0eb9e] text-sm w-full mt-8">
          Copyright 2025 ©️ TalkNow. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
};
