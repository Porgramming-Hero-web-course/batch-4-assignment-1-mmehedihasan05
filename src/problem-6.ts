interface Profile {
    name: string;
    age: number;
    email: string;
}
const updateProfile = (profileValue: Profile, updateValue: Partial<Profile>): Profile => {
    return { ...profileValue, ...updateValue };
};
