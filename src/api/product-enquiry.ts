// src/api/product-enquiry.ts
import { BASE_URL } from './baseURL';

export interface ProductEnquiryData {
    name: string;
    email: string;
    contact_person?: string;
    company_name?: string;
    contact_number?: string;
    note?: string;
    requested_for?: string;
    captcha_token: string;
}

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