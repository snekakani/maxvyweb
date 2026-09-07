import { BASE_URL } from './baseURL';

// Interface for the captcha response
export interface CaptchaResponse {
    success: boolean;
    captcha_id: string;
    captcha_image: string;
    expires_in: number;
}

// Interface for the product enquiry request
export interface ProductEnquiryData {
    name: string;
    email: string;
    contact_person?: string;
    company_name?: string;
    contact_number?: string;
    note?: string;
    requested_for?: string;
    captcha_id: string;
    captcha: string;
}

// Interface for the product enquiry response
export interface ProductEnquiryResponse {
    success: boolean;
    message: string;
    data?: {
        id: number;
        name: string;
        email: string;
        contact_person: string;
        company_name: string;
        contact_number: string;
        note: string;
        requested_for: string;
        status: number;
        delete_flag: number;
        created_at: string;
        updated_at: string;
    };
    errors?: Record<string, string[]>;
    captcha_error?: string[];
}

// Get captcha from the server
export const getCaptcha = async (): Promise<CaptchaResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/captcha`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to load captcha');
        }

        return responseData as CaptchaResponse;
    } catch (error) {
        console.error('Captcha error:', error);
        throw error;
    }
};

// Submit product enquiry with captcha
export const submitProductEnquiry = async (
    data: ProductEnquiryData
): Promise<ProductEnquiryResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/product-enquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok) {
            return responseData as ProductEnquiryResponse;
        }

        return responseData as ProductEnquiryResponse;
    } catch (error) {
        console.error('Product enquiry error:', error);
        return {
            success: false,
            message: 'Network error. Please try again.',
        };
    }
};