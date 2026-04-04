// patukrishi-auth.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// YOUR SUPABASE CONFIG - NOW CORRECTED
const supabaseUrl = 'https://vcmsdjyhjsezwklunidw.supabase.co'  // ✅ Fixed!
const supabaseKey = 'sb_publishable_Dz_JmUbfRGXYzejzEqq9zg_FO72pKBb'

const supabase = createClient(supabaseUrl, supabaseKey)

// Sign up function
export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: window.location.origin + '/verify'
        }
    })
    
    if (error) {
        return { success: false, message: error.message }
    }
    return { success: true, message: 'Verification email sent! Check your inbox.' }
}

// Login function
export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    
    if (error) {
        return { success: false, message: error.message }
    }
    
    if (!data.user.email_confirmed_at) {
        await supabase.auth.signOut()
        return { success: false, message: 'Please verify your email first.' }
    }
    
    return { success: true, message: 'Login successful!', user: data.user }
}
