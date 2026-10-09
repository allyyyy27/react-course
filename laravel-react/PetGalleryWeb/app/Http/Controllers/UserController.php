<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller{

    // Fetch all users (from the previous step)
    public function index(){
        return response()->json(User::all());
    }

    // Register a new user
    public function userRegistration(Request $request)
    {
        try {
            // Fix typo: firsName -> firstName
            $firstName   = $request->firstName;
            $middleName  = $request->middleName;
            $lastName    = $request->lastName;
            $suffix      = $request->suffix;
            $email       = $request->email;
            $userName    = $request->userName;
            $password    = $request->password;
            $pinCode     = (int) $request->pinCode;

            $parameters = [
                $firstName,
                $middleName,
                $lastName,
                $suffix,
                $email,
                $userName,
                $password,
                $pinCode
            ];

            // Added missing 9th placeholder '?' after password parameter
            $submit = DB::connection()->selectOne('
                DECLARE @pintErrNum SMALLINT
                DECLARE @pstrErrMsg VARCHAR(200)
                DECLARE @NewUserRecID BIGINT
                EXEC spUserCredentials ?,?,?,?,?,?,?,?, @pintErrNum OUTPUT, @pstrErrMsg OUTPUT, @NewUserRecID OUTPUT
                SELECT @pintErrNum AS ErrorNumber, @pstrErrMsg AS ErrorMessage
            ', $parameters);

            return response()->json([
                'errorNumber'  => $submit->ErrorNumber,
                'errorMessage' => $submit->ErrorMessage
            ]);
        } 
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function userLogin(Request $request){
        return;
    }
}