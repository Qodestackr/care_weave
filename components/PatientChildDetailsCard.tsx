
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PatientChildDetailsCard() {
    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover"
            style={{ backgroundImage: 'url("/background-image.jpg")' }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6">Tell us about your child</h1>
                <div className="space-y-4 mb-6">
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Legal first name
                            </label>
                            <Input id="first-name" placeholder="" />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Legal last name
                            </label>
                            <Input id="last-name" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                            Date of birth
                        </label>
                        <div className="flex space-x-2">
                            <Input id="dob-mm" placeholder="MM" className="flex-1" />
                            <span>/</span>
                            <Input id="dob-dd" placeholder="DD" className="flex-1" />
                            <span>/</span>
                            <Input id="dob-yyyy" placeholder="YYYY" className="flex-1" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                            Sex assigned at birth
                        </label>
                        <div className="flex space-x-4">
                            <Button variant="outline" className="flex-1">
                                Female
                            </Button>
                            <Button variant="outline" className="flex-1">
                                Male
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <Button className="flex-1 bg-blue-600 text-white">Continue</Button>
                    <Button variant="ghost" className="flex-1">
                        Skip
                    </Button>
                </div>
            </div>
        </div>
    )
}