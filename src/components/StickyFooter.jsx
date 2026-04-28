import React from 'react';
import { Phone } from 'lucide-react';

export default function StickyFooter() {
    return (
        <div className="fixed right-4 bottom-6 z-50 flex flex-col gap-3">

            {/* Call Button */}
            <a
                href="tel:+918891494731"
                className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform"
                aria-label="Call Olive Dental"
            >
                <Phone size={20} className="text-white md:w-[22px] md:h-[22px]" />
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/918891494731?text=Hi%20Olive%20Dental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
                aria-label="WhatsApp Olive Dental"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.001 2C6.479 2 2.003 6.476 2.003 12c0 1.85.49 3.582 1.343 5.078L2 22l5.09-1.333A9.955 9.955 0 0 0 12.001 22C17.522 22 22 17.524 22 12S17.522 2 12.001 2zm0 18.154a8.118 8.118 0 0 1-4.134-1.13l-.296-.174-3.018.79.808-2.944-.192-.302A8.11 8.11 0 0 1 3.89 12c0-4.475 3.641-8.116 8.111-8.116 4.47 0 8.112 3.641 8.112 8.116 0 4.474-3.642 8.154-8.112 8.154zm4.456-6.092c-.244-.122-1.442-.711-1.665-.792-.223-.082-.386-.122-.548.122-.163.244-.63.792-.773.956-.143.163-.285.183-.529.061-.244-.122-1.03-.38-1.963-1.21-.725-.647-1.214-1.445-1.358-1.689-.142-.244-.015-.376.108-.497.11-.109.244-.285.366-.427.12-.143.162-.244.243-.407.081-.163.04-.305-.02-.428-.062-.122-.549-1.322-.753-1.81-.197-.476-.398-.41-.548-.418l-.467-.008a.895.895 0 0 0-.65.305c-.224.244-.854.834-.854 2.033s.875 2.358 1 2.521c.122.163 1.724 2.633 4.178 3.692.583.252 1.038.402 1.392.515.585.186 1.118.16 1.539.097.469-.07 1.442-.59 1.645-1.16.203-.57.203-1.057.142-1.16-.06-.101-.222-.162-.467-.284z"/>
                </svg>
            </a>

        </div>
    );
}